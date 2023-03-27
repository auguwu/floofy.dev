/*
 * 🐾 @noel/site: Noel's personal website, blog, and documentation site made with Astro
 * Copyright (c) 2018-2023 Noel <cutie@floofy.dev>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// @ts-check

const { default: pino } = require('pino');
const { serializers } = require('@augu/pino-transport');
const { randomBytes } = require('crypto');
const { existsSync } = require('fs');
const { resolve } = require('path');
const serveStatic = require('@fastify/static');
const fastify = require('fastify');

const logstashTcpUrl = process.env.LOGSTASH_TCP_URI;

const log = pino({
    name: 'floofy.dev',
    serializers: {
        req: serializers.request,
        res: serializers.response,
        err: serializers.createErrorSerializer(),
        error: serializers.createErrorSerializer()
    },
    transport: {
        // @ts-ignore
        targets: [
            // @ts-ignore
            { target: './transport.js' },

            // @ts-ignore
            logstashTcpUrl !== undefined ? { target: './tcp-transport.js' } : undefined
        ].filter(Boolean)
    }
});

async function main() {
    const DIST_PATH = resolve(process.cwd(), 'dist');
    if (!existsSync(DIST_PATH)) {
        log.fatal(`Missing directory [${DIST_PATH}]`);
        process.exit(1);
    }

    const { handler } = await import(resolve(DIST_PATH, 'server/entry.mjs'));
    const server = fastify({
        logger: log.child({ name: 'floofy.dev:fastify' }),
        genReqId: () => randomBytes(4).toString('hex'),
        requestIdHeader: 'X-Request-Id',
        ignoreDuplicateSlashes: true,
        ignoreTrailingSlash: true
    });

    server.register(serveStatic, {
        prefix: '/_astro',
        root: resolve(DIST_PATH, 'client/_astro')
    });

    server.get('/healthz', (_, reply) => reply.status(200).send('OK!'));
    server.all('*', async (req, reply) => {
        for (const [header, value] of Object.entries(reply.getHeaders())) reply.header(header, value);

        // hijack the request
        reply.hijack();
        return handler(req.raw, reply.raw, Function.prototype);
    });

    await server.ready();
    return new Promise((resolve, reject) =>
        server.listen({ port: 3000, host: '0.0.0.0' }, (err) => (err ? reject(err) : resolve(undefined)))
    );
}

main().catch((ex) => {
    log.fatal(ex);
    process.exit(1);
});
