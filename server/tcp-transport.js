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

const { formatters } = require('@augu/pino-transport');
const psock = require('pino-socket');

const logstashTcpUrl = process.env.LOGSTASH_TCP_URI;
const logstashTcpPort = process.env.LOGSTASH_TCP_PORT || 4040;
const json = new formatters.Json();

module.exports = () =>
    psock({
        address: logstashTcpUrl,
        port: logstashTcpPort,
        mode: 'tcp',

        /** @param {Buffer} data */
        onBeforeDataWrite(data) {
            const payload = JSON.parse(data.toString('utf-8'));
            return Buffer.from(json.transform(payload), 'utf-8');
        }
    });
