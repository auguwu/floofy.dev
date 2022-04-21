FROM node:18-alpine

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/pawb
COPY . .
RUN yarn global add typescript eslint
RUN yarn

# https://github.com/webpack/webpack/issues/14532
RUN NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--openssl-legacy-provider NODE_ENV=production yarn build
RUN rm -rf src

ENTRYPOINT [ "yarn", "start" ]
