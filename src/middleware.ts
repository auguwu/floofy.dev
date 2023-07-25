/*
 * 🐾 @noel/site: Noel's personal website, blog, and documentation site made with Astro
 * Copyright (c) 2018-2023 Noel Towa <cutie@floofy.dev>
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

import { createSerializers } from '@augu/pino-transport';
import { defineMiddleware } from 'astro/middleware';
import pino from 'pino';

const level = process.env.NODE_ENV === 'production' ? 'info' : 'debug';
const serializers = createSerializers({
    error: true
});

const requestSerializer = (request: Request) => ({
    id: null,
    method: request.method,
    url: request.url,
    headers: [...request.headers.entries()].reduce<Record<string, string>>((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {})
});

const responseSerializer = (request: Request) => (response: Response) => ({
    status: response.status,
    status_message: response.statusText,
    headers: [...response.headers.entries()].reduce<Record<string, string>>((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {}),
    request: requestSerializer(request)
});

const log = pino({
    serializers: {
        ...serializers,
        request: requestSerializer
    },
    level,
    name: 'floofy.dev',
    transport: {
        target: '@augu/pino-transport'
    }
});

export const onRequest = defineMiddleware(async ({ request }, next) => {
    const now = performance.now();
    log.info({ request }, 'processing request');

    const response = await next();
    log.info(
        { response: responseSerializer(request)(response), responseTime: performance.now() - now },
        'processed request'
    );

    return response;
});
