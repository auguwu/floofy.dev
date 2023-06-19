---
title: charted ~ Actual Architecture
description: The actual architecture of charted-server, and why I chose it
createdAt: 2023-06-19T14:35:00.438Z
---

It's no secret that **charted-server** is based off the microservices architecture, as there is multiple components that can connect towards it. I chose the microservices approach because:

* It will simply how **charted-server** is being used on a small box to a production-heavy environment.
* You don't need to worry about one service failing, as all the microservices being built for charted can be horizontally scaled, so it'll fallback to an available server.

**charted-server** does allow external services to be used like [Elastic APM](https://elastic.co/products/apm) for tracing, [Sentry](https://sentry.io) for error tracking,
[Logstash](https://elastic.co/products/logstash) for pushing logs into any ingestable source via TCP, and more.

Here is a full list of software can be configured with **charted-server**:

* **Elastic APM**, **Sentry**, or **OpenTelemetry** (optional): Tracing mechanisms.
* **Elasticsearch** or **Meilisearch** (optional): Main search databases
* **Logstash** (optional): Pushing Logback events into any ingestable source via TCP.
* **Sentry** (optional): Error tracking and optionally tracing.
* **PostgreSQL**: Main database.
* **Redis**: Caching layer for HTTP responses, session management, and the main database layer for less database calls.

## PostgreSQL
I chose **PostgreSQL** as I am somewhat a dumbass on how to manage a PostgreSQL cluster, but the more I fuck up, the more I learn!

## Redis
it's just a better solution, and i dont want to use [etcd](https://etcd.io) at all.

## Sentry
Noelware hosts an private instance of [Sentry](https://sentry.io) to keep errors internally, so this was made for us really.

## Logstash
This was also tailoured to Noelware, but you can use it! We currently use a custom microservice to push Logstash events into a Kafka producer and Logstash will receive events from said producer.

## Elasticsearch/Meilisearch
You might be thinking of why I chose to support Elasticsearch and Meilisearch together? It really depends on how you plan to use the API server, for Noelware's needs, we have 
multi-node single cluster Elasticsearch cluster (as the time of writing this) which include all of our logs, metrics, and search data. Meilisearch is a Rust-based search database
that plans to give speed as its main priority, and people might want to use this (and maybe it'll be embedded as the default one as it is small to run if not under a heavy load).

## Elastic APM/OpenTelemetry
Tracing is a core feature that Noelware needs to see how we can improve our software. We currently use [Elastic APM](https://elastic.co/products/apm) as we use the Elastic Stack
heavily (if you can tell).

## thanks for listeninfg
idk when the next one will be but yeah.

~ **Noel**
