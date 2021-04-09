FROM node:15-alpine

LABEL MAINTAINER="August <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/floofy.dev
COPY . .
RUN npm i -g typescript eslint next
RUN npm ci
# We don't call `--fix` cuz the workflow should return exit 1
RUN eslint src --ext .ts
RUN NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production npm run build
RUN rm -rf src

ENTRYPOINT [ "next", "start" ]
