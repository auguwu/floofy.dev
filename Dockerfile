# 🐾 @noel/paw: Paw is a personalized website about myself and my projects, source code for https://floofy.dev
# Copyright (c) 2018-2022 Noel
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

FROM node:18-alpine AS builder

RUN apk update && apk add git ca-certificates
WORKDIR /build/floofy.dev

COPY . .
RUN yarn install --immutable
ENV \
  NEXT_TELEMETRY_DISABLED=1 \
  NODE_OPTIONS=--openssl-legacy-provider \
  NODE_ENV=production

RUN yarn build

FROM node:18-alpine

RUN apk update
WORKDIR /app/noel/floofy.dev

COPY --from=builder /build/floofy.dev/.next        /app/noel/floofy.dev/.next
COPY --from=builder /build/floofy.dev/yarn.lock    /app/noel/floofy.dev/yarn.lock
COPY --from=builder /build/floofy.dev/node_modules /app/noel/floofy.dev/node_modules
COPY --from=builder /build/floofy.dev/package.json /app/noel/floofy.dev/package.json

CMD ["yarn", "start"]
