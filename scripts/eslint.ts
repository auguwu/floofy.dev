/*
 * 🐾 @noel/site: Noel's personal website, blog, and documentation site made with Astro
 * Copyright (c) 2018-2024 Noel Towa <cutie@floofy.dev>
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

// @ts-ignore
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { Stopwatch } from '@noelware/utils';
import { fileURLToPath } from 'node:url';
import * as log from './util/logging';
import type { ESLint } from 'eslint';
import * as colors from 'colorette';
import { resolve } from 'node:path';

async function main() {
    const ROOT = fileURLToPath(new URL('..', import.meta.url));
    log.info(`root directory: ${ROOT}`);

    const linter = new FlatESLint({
        allowInlineConfig: true,
        fix: !log.ci,
        cwd: ROOT
    });

    const glob = new Bun.Glob('**/*.{ts,js}');
    const formatter = await linter.loadFormatter('codeframe');

    log.startGroup(`linting directory [${resolve(ROOT)}]`);

    let failed = false;
    for await (const file of glob.scan({ cwd: ROOT })) {
        if (file.includes('node_modules') || file.includes('dist')) {
            continue;
        }

        const sw = Stopwatch.createStarted();
        log.info(
            `${colors.isColorSupported ? colors.bold(colors.magenta('START')) : 'START'}   ${resolve(ROOT, file)}`
        );

        const contents = await Bun.file(resolve(ROOT, file)).text();
        const results: ESLint.LintResult[] = await linter.lintText(contents, {
            filePath: resolve(ROOT, file)
        });

        if (!log.ci) {
            const shouldPrint = formatter.format(results);
            shouldPrint.length > 0 && console.log(shouldPrint);

            for (const result of results) {
                for (const msg of result.messages) {
                    switch (msg.severity) {
                        case 2:
                            failed = true;
                            break;
                    }
                }
            }
        } else {
            for (const result of results) {
                for (const msg of result.messages) {
                    switch (msg.severity) {
                        case 0:
                            continue;

                        case 1:
                            log.warn(
                                `[${msg.ruleId || '(unknown rule)'}] ${msg.message} (line ${msg.line}:${msg.column})`
                            );
                            continue;

                        case 2:
                            failed = true;
                            log.error(
                                `${
                                    colors.isColorSupported ? colors.bold(colors.red('FAILED')) : 'FAILED'
                                } file [${file}] has failed to lint properly; run \`bun run lint\` outside of CI to fix it: ${
                                    msg.ruleId || '(unknown rule)'
                                }: ${msg.message}`,
                                {
                                    startColumn: msg.endColumn,
                                    endColumn: msg.endColumn,
                                    startLine: msg.line,
                                    endLine: msg.endLine,
                                    title: `[${msg.ruleId || '(unknown)'}] ${msg.message}`,
                                    file: file
                                }
                            );

                            break;
                    }
                }
            }
        }

        log.info(
            `${colors.isColorSupported ? colors.bold(colors.magenta('END')) : 'END'}     ${resolve(ROOT, file)} ${
                colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : ''
            }`
        );
    }

    log.endGroup();
    process.exit(failed ? 1 : 0);
}

main().catch((ex) => {
    log.error(ex);
    process.exit(1);
});
