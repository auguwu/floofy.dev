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

import { warning, error } from '@actions/core';
import { Signale } from 'signale';
import { ESLint } from 'eslint';

const log = new Signale({
    scope: '@noel/site:eslint',
    config: {
        displayBadge: true,
        displayScope: true,
        displayTimestamp: true,
        displayDate: true
    }
});

// list of directories to glob over
const dirs = ['src/**/*.{ts,tsx,astro}', 'scripts/**/*.ts'] as const;
async function main() {
    const symbols = await import('log-symbols').then((f) => f.default);
    const eslint = new ESLint({
        useEslintrc: true,

        // if we aren't in ci, use the --fix flag to fix
        // the issues
        fix: process.env.CI === undefined
    });

    for (const dir of dirs) {
        log.info(`Linting directory [${dir}]`);
        const results = await eslint.lintFiles(dir);
        for (const result of results) {
            for (const message of result.messages) {
                const s = message.severity === 1 ? symbols.warning : symbols.error;
                if (process.env.CI !== undefined) {
                    const method = message.severity === 1 ? warning : error;
                    method(`${s} ${message.message} (${message.ruleId})`, {
                        endColumn: message.endColumn,
                        endLine: message.endLine,
                        file: result.filePath,
                        startLine: message.line,
                        startColumn: message.column
                    });
                } else {
                    const method = message.severity === 1 ? log.warn : log.error;
                    method(`${message.message} (${message.ruleId})`);
                }
            }
        }
    }
}

main().catch((ex) => {
    log.error(ex);
    process.exit(1);
});
