FROM node:16-alpine

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/pawb
COPY . .
RUN npm i -g typescript eslint next
RUN yarn
RUN NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production yarn build
RUN rm -rf src

ENTRYPOINT [ "next", "start" ]
