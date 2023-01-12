---
title: Building a background task queue in Kotlin
description: How I built Noelware's Kotoha task queue framework in a single blog post.
createdAt: 2022-12-21T07:05:51.545Z
draft: true
layout: ../../layouts/Blog.astro
---

I learned a lot how to do the simplest things: building a background task queue in Kotlin with the power of [kotlinx.coroutines](https://github.com/Kotlin/kotlinx-coroutines). But Noel, why would you build one from scratch? It's because there hasn't been one created for Kotlin/JVM. I wanted to build one that is like [Celery](https://docs.celeryq.dev/en/stable/index.html) and [Sidekiq](https://sidekiq.org/) but for Kotlin.

The project is named [Kotoha](https://noelware.org/docs/libraries/kotlin/kotoha/current), it's a project that I am proud of creating since it taught me how to build a task queue that can be scaled horizonally while being performant.

## Why was Kotoha created?

**Kotoha** was created to use the power of [kotlinx.coroutines](https://github.com/Kotlin/kotlinx-coroutines) while trying to be robust, have a cute and powerful DSL for building jobs, and much more. I needed a
system where jobs can be executed in the background without not leaking too much resources, so, Kotoha was created.

Even though **Kotoha** is alpha software (and will have a lot of improvements in the near future), I think it'll help build out resilisent software written in the Kotlin programming language.

## First Goal: Scaling horizonally

**Kotoha**'s first goal to reach is to scale horizonally. I chose to scale horizonally because the infrastructure I built is with [Kubernetes](https://kubernetes.io) and I needed a way to not use a lot of resources that can impact other services (like the [charted-server API Server](https://charts.noelware.org/docs/current/api-server) not taking too much time on background jobs to make HTTP requests slow).

## Second Goal: Serialization

**Kotoha**'s second goal to reach is serialization. Serialization comes into play when you want to add arguments to a scheduled job that can be cached into Redis or locally. Since Noelware's products and services heavily rely on Redis for other features, this was the easier to implement. Kotoha creates a hash table (named `kotoha:jobs`) where the structure is like:

```sh
$ redis-cli ...
# 127.0.0.1:6379> HGETALL kotoha:jobs
# org.noelware.charted.server.jobs.ElasticsearchUpdateIndexesJob => {
#     "name"      => "ElasticsearchUpdateIndexesJob",
#     "type"      => "org.noelware.kotoha.CronJob",
#     "arguments" => [
#         {
#             "$type"    => "org.noelware.charted.databases.postgres.models.User",
#             "name"     => "user",
#             "required" => false
#         }
#     ]
# }
```

For inter-process communications (between X -> Y), we will need to have a messaging bus to allow communication between one service and another. As an example, **charted-server** has inter-process communications between a Kotoha Cron Job and the API server which might have an open connection to PostgreSQL without ever needing to create a connection and destroy it (and repeat).

## Third Goal: IPC (Inter-Process Communication)

**IPC** is not a required goal for most applications, but for Noelware, it was a required goal to reach. IPC is used to not rely on the API server configuration to create and destroy, for example, database connections. Kotoha allows you to define "messages" that can be sent from consumer -> producer <- consumer.

Messages define **event** objects which must implement the `@Serializable` annotation from **kotlinx.serialization**. You can define a message as so:

```kotlin
package dev.floofy.examples.kotoha.ipc

import kotlinx.serialization.Serializable
import org.noelware.kotoha.features.ipc.Message
import org.noelware.kotoha.features.ipc.Event

@Serializable
data class FetchUserEvent(val user: User): Event()
```

This will serialized into a object like:

```json
{
  "$type": "dev.floofy.examples.kotoha.ipc.FetchUserEvent",
  "user": {
    "name": "Noel",
    "age": 18,
    "barks": true,
    "woofs": false,
    "species": "Polar Bear"
  }
}
```

where, you can use the Kotoha Scheduler to send out the message:

```kotlin
kotohaScheduler.deliverMessage(FetchUserEvent(User(
  name    = "Noel",
  age     = 18,
  barks   = true,
  woofs   = false,
  species = "Polar Bear"
)))
```
