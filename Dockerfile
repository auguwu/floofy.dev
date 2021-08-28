FROM node:16-alpine

LABEL MAINTAINER="August <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/floofy.dev
COPY . .
RUN yarn
RUN NUXT_TELEMETRY_DEBUG=1 NODE_ENV=production yarn build
RUN NUXT_TELEMETRY_DEBUG=1 NODE_ENV=production yarn generate
RUN rm -rf src

ENTRYPOINT [ "nuxt", "start" ]
