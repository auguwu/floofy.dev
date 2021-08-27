FROM node:16-alpine

LABEL MAINTAINER="August <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/floofy.dev
COPY . .
RUN yarn
RUN NODE_ENV=production yarn build
RUN rm -rf src

ENTRYPOINT [ "nuxt", "start" ]
