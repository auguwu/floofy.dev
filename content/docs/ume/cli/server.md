---
title: 'command: ume server'
description: Starts a Ume server
---

<pre>
$ ume <a href="/docs/ume/cli#global-options">[GLOBAL-OPTIONS]</a> server
</pre>

The **server** subcommand will start a Ume server that'll be hosted on `0.0.0.0:3621` by default. This command is the actual meat and potatoes on how Ume can process images and store them to a location in either the local filesystem, Amazon S3, Microsoft Azure Blob Storage, or MongoDB Gridfs.

## Architecture

The architecture of the Ume server is a simple HTTP server that'll listen on <code>[`0.0.0.0`](/docs/self-hosting/configuration#server.host):[`3621`](/docs/self-hosting/configuration#server.port)</code> and will respond to incoming traffic.

The actual implementation of uploading images is the `POST /images/upload` endpoint, which is guarded by a **Uploader Key**. The **Uploader Key** is a finalized key that is used to authenticate requests so the server doesn't accept unwanted images from people who are trying to exploit it. The server processes images and checks the actual validity of the image by checking the magic signature of it.

For example, a simple **cURL** request would be something like:

```shell
$ curl -H "Authorization: <UPLOADER KEY>" --data-binary=@/path/to/your/image.png
```

## Flags

| Flag                                                                     | Description                                                                            |
| :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| <a id="flag-config" />`-c, --config <PATH>` (`$UME_CONFIG_FILE`)         | Location to the [server configuration](/docs/self-hosting/configuration).              |
| <a id="flag-workers" />`-w, --workers <WORKERS>` (`$UME_SERVER_WORKERS`) | Number of Tokio workers to use, it'll be limited to the amount of CPU cores avaliable. |

## Global Options

| Flag                                               | Description                                                                                               |
| :------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| <a id="flag-log-level" />`-l, --log-level <LEVEL>` | Configures the log level for all CLI commands. This will not configure for `ume server` (default: `INFO`) |
| <a id="flag-quiet" />`-q, --quiet`                 | Suppress all log output even if `--log-level` is specified.                                               |
| <a id="flag-help" />`-h, --help`                   | Print help                                                                                                |
