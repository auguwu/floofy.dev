---
title: Moving from Kubernetes to Podman
description: I started to move from Kubernetes to Podman for my Oracle VM.
layout: ../../layouts/Blog.astro
createdAt: 2023-01-12T11:40:20.641Z
---

I started to move from Kubernetes to Podman for my Oracle VM that I do preliminary testing on for integration, unit, and possible end to end testing. Since Oracle had free ARM64 VMs and I don't have to get a Raspberry Pi yet, this was a win win for me.

The main initial move was when my K3s cluster started to not work anymore due to Etcd snapshots, so, I started to move to Podman instead of Docker for the sole reason to see if it'll work in my workflow, and it did!

Since I use the [Elastic Stack](https://elastic.co) for logs, metrics, and search, I integrated Metricbeat with Podman so it can collect information about the containers and send them to my Elasticsearch cluster.

I don't plan to commit to Podman until I have tested it well enough to warrant an Docker uninstallation on my VM. I'll talk about that in a later blog post~!

## Installing Podman

Since I'll be using Docker Compose (Podman recently added support for Docker Compose v2), I'll need to be on a recent installation, and the ones that are on the official Ubuntu repositories were not up-to-date, I just went with the unstable repositories that are on the [Podman Installation](https://podman.io/getting-started/installation) page:

```shell
$ curl -fsSL https://download.opensuse.org/repositories/devel:kubic:libcontainers:unstable/Debian_Unstable/Release.key \
  | gpg --dearmor \
  | sudo tee /etc/apt/keyrings/devel_kubic_libcontainers_unstable.gpg > /dev/null

$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/devel_kubic_libcontainers_unstable.gpg]\
    https://download.opensuse.org/repositories/devel:kubic:libcontainers:unstable/Debian_Unstable/ /" \
  | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:unstable.list > /dev/null
```

and I ran the normal APT commands you would normally use to install software on Ubuntu:

```shell
$ sudo apt update && sudo apt -y upgrade
$ sudo apt install -y podman
```

## Moving to Podman

Now that I installed Podman and it works for me when I run `podman ps`:

```shell
[ubuntu@ice-is-adorable]$ ~ podman ps
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
```

## Bonus: Running GitHub Actions' Runner with Podman

Since I use GitHub for my CI/CD pipeline, I need a self-hosted runner to do testing on!

Bad part is, I have to write my own Docker image for this, so you can just copy what I have and upload it to your Docker registry, which mine is available at `registry.floofy.dev/actions/runner`:

```dockerfile
FROM ghcr.io/auguwu/coder-images/dotnet

ARG RUNNER_VERSION=2.300.2

# Switch to `root` user so we can install packages
USER root

# Upgrade all the base packages
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt upgrade -y

# Install Python and other necessities.
RUN apt install -y --no-install-recommends tini jq build-essential libssl-dev libffi-dev python3 python3-venv python3-dev python3-pip

# Create a directory where the Actions Runner will be installed in and let the `noel` user actually install it
# and run its dependencies
RUN mkdir -p /opt/github/actions-runner && chown -R noel:noel /opt/github/actions-runner

# Now, let's build it! ...and switch back to the `noel` user
RUN set -eux; \
  arch="$(dpkg --print-architecture)"; \
  case "${arch}" in \
    aarch64|arm64) \
      GITHUB_ACTIONS_RUNNER_URL="https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-arm64-${RUNNER_VERSION}.tar.gz"; \
      ;; \
    x86_64|amd64) \
      GITHUB_ACTIONS_RUNNER_URL="https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-x64-${RUNNER_VERSION}.tar.gz"; \
      ;; \
  esac; \
  curl -L ${GITHUB_ACTIONS_RUNNER_URL} | tar xfz - -C /opt/github/actions-runner --strip-components=1 --no-same-owner;

RUN /opt/github/actions-runner/bin/installdependencies.sh
COPY start.sh /opt/github/actions-runner/bin/start-service.sh
RUN chmod +x /opt/github/actions-runner/bin/start-service.sh

USER noel

ENTRYPOINT ["/opt/github/actions-runner/bin/start-service.sh"]
```

And for `start.sh`:

```shell
#!/bin/bash

if [ -z "${GITHUB_ORGANIZATION:-}" ]; then
  echo "[actions-runner] You must set the \`GITHUB_ORGANIZATION\` environment variable"
  exit 1
fi

if [ -z "${GITHUB_ACCESS_TOKEN:-}" ]; then
  echo "[actions-runner] You must set the \`GITHUB_ACCESS_TOKEN\` environment variable"
  exit 1
fi

HOSTNAME=$(cat /etc/hostname)
ORGANIZATION=${GITHUB_ORGANIZATION}
ACCESS_TOKEN=${GITHUB_ACCESS_TOKEN}
RUNNER_NAME=${GITHUB_RUNNER_NAME:-"actions-runner-$HOSTNAME"}
REGISTRATION_TOKEN=$(curl -sX POST -H "Authorization: token ${ACCESS_TOKEN}" https://api.github.com/orgs/${ORGANIZATION}/actions/runners/registration-token | jq .token --raw-output)

echo "[actions-runner] I have setup the runner's registration token with the $ORGANIZATION organization and with runner name $RUNNER_NAME"

mkdir -p $HOME/_work
cd /opt/github/actions-runner

# Setup the runner
./config.sh --unattended --replace         \
  --url https://github.com/${ORGANIZATION} \
  --token ${REGISTRATION_TOKEN}            \
  --disableupdate                          \
  --name actions-runner                    \
  --runnergroup ""                         \
  --work "$HOME/_work"

echo "[actions-runner:$RUNNER_NAME@$ORGANIZATION] The runner should be configured now!"

function cleanup() {
  echo "[actions-runner] Destroying runner..."
  ./config.sh remove --token ${REGISTRATION_TOKEN}
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

./run.sh & wait $!
```

Once you build the image, you should see something similar in logs, I used the [Noelware](https://github.com/Noelware) organization to test the runner with, you should set the `GITHUB_ORGANIZATION` environment variable with the one you have access to.

```shell
$ docker run --rm --name actions-runner \
  -e GITHUB_ORGANIZATION=Noelware \
  -e GITHUB_ACCESS_TOKEN=sometokenhere \
  <image tag>

# --------------------------------------------------------------------------------
# |        ____ _ _   _   _       _          _        _   _                      |
# |       / ___(_) |_| | | |_   _| |__      / \   ___| |_(_) ___  _ __  ___      |
# |      | |  _| | __| |_| | | | | '_ \    / _ \ / __| __| |/ _ \| '_ \/ __|     |
# |      | |_| | | |_|  _  | |_| | |_) |  / ___ \ (__| |_| | (_) | | | \__ \     |
# |       \____|_|\__|_| |_|\__,_|_.__/  /_/   \_\___|\__|_|\___/|_| |_|___/     |
# |                                                                              |
# |                       Self-hosted runner registration                        |
# |                                                                              |
# --------------------------------------------------------------------------------

# # Authentication
# √ Connected to GitHub

# # Runner Registration

# √ Successfully replaced the runner
# √ Runner connection is good

# # Runner settings

# √ Settings Saved.
# √ Connected to GitHub

# 2023-01-12 13:27:01Z: Runner reconnected.
# Current runner version: '2.300.2'
# 2023-01-12 13:27:01Z: Listening for Jobs
```

## Getting Docker Compose to work

Now that we have our Actions image and it is uploaded to the registry of your choice (mine is my own), now we can setup the Docker compose file for it.

But first, we need to install Docker Compose:

```shell
# I used `aarch64` since I am doing this on my Oracle ARM VM, you can use `x86_64` at the end for x64 systems.
$ curl -L -o /usr/bin/docker-compose https://github.com/docker/compose/releases/download/v2.15.1/docker-compose-linux-aarch64
```

For this example, I'll be using `registry.floofy.dev/actions/runner:2.300.2` as the runner in this example, but you should switch it out with the one you built since I only have access to `registry.floofy.dev`. :3

```yaml
version: '3.8'
services:
  runner:
    image: registry.floofy.dev/actions/runner:2.300.2
    container_name: actions-runner
    environment:
      - GITHUB_ORGANIZATION=Noelware
      - GITHUB_ACCESS_TOKEN=${GH_ACCESS_TOKEN}
      - GITHUB_RUNNER_NAME=actions-runner-arm64
    groups:
      # This is where we need to set the Docker group. You can use
      # the `getent group docker | cut -d: -f3` command to get the `docker` group ID.
      #
      # - $(result of `getent group docker | cut -d: -f3`)
    volumes:
      # If we wanted to use Docker, we can use it here
      - /var/run/docker.sock:/var/run/docker.sock
```
