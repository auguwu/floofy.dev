# 🐾 @noel/site: Noel's personal website, blog, and documentation site made with Astro
# Copyright (c) 2018-2023 Noel Towa <cutie@floofy.dev>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

FROM node:20.8.0-alpine3.18 AS build

RUN apk update && apk add --no-cache git ca-certificates
WORKDIR /build

COPY .yarn /build/.yarn
COPY package.json .
COPY .yarnrc.yml .
COPY yarn.lock .

RUN yarn install --immutable

COPY . .
RUN yarn build

FROM node:20.8.0-alpine3.18

RUN apk update && apk add --no-cache ca-certificates bash tini curl
WORKDIR /app/noel/site

COPY --from=build /build/node_modules /app/noel/site/node_modules
COPY --from=build /build/dist         /app/noel/site/dist

RUN addgroup -g 1001 noel && \
    adduser -DSH -u 1001 -G noel noel && \
    chown -R noel:noel /app/noel/site

EXPOSE 3000

USER noel
ENTRYPOINT ["tini", "-s"]
CMD ["node", "dist/server/entry.mjs"]
