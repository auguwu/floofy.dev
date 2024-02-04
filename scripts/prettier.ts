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

import { Stopwatch } from '@noelware/utils';
import * as log from './util/logging';
import * as prettier from 'prettier';
import * as colors from 'colorette';
import { resolve } from 'node:path';

async function main() {
    const ROOT = Bun.fileURLToPath(new URL('..', import.meta.url));
    log.info(`root directory: ${ROOT}`);

    const config = await prettier.resolveConfig(resolve(ROOT, '.prettierrc.json'));
    if (config === null) {
        throw new Error(`was unable to resolve Prettier config in [${resolve(ROOT, '.prettierrc.json')}] ?!`);
    }

    const glob = new Bun.Glob('**/*.{ts,js,md,yaml,yml,json}');
    log.startGroup('formatting!');

    let failed = false;
    for await (const file of glob.scan({ cwd: ROOT })) {
        if (file.includes('node_modules') || file.includes('dist')) {
            continue;
        }

        const sw = Stopwatch.createStarted();
        log.info(
            `${colors.isColorSupported ? colors.bold(colors.magenta('START')) : 'START'}   ${resolve(ROOT, file)}`
        );

        // lazily create a Bun.File, which we will use later
        const fileObj = Bun.file(resolve(ROOT, file));
        const info = await prettier.getFileInfo(resolve(ROOT, file));
        if (info.inferredParser === null) {
            log.warn(
                `${colors.isColorSupported ? colors.bold(colors.gray('IGNORED')) : 'IGNORED'}   ${resolve(
                    ROOT,
                    file
                )} ${colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : `[${sw.stop()}]`}`
            );

            continue;
        }

        const contents = await fileObj.text();
        if (log.ci) {
            const correct = await prettier.check(contents, {
                parser: info.inferredParser,
                ...config
            });

            if (!correct) {
                log.error(
                    `${
                        colors.isColorSupported ? colors.bold(colors.red('FAILED')) : 'FAILED'
                    } file was not properly formatted. run \`bun run fmt\` outside of CI ${
                        colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : `[${sw.stop()}]`
                    }`,
                    {
                        file: resolve(ROOT, file)
                    }
                );

                failed = true;
                break;
            }

            log.info(
                `${colors.isColorSupported ? colors.bold(colors.magenta('END')) : 'END'}     ${resolve(ROOT, file)} ${
                    colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : ''
                }`
            );
        } else {
            const formatted = await prettier.format(contents, {
                parser: info.inferredParser,
                ...config
            });

            await Bun.write(fileObj, formatted, { createPath: false });

            log.info(
                `${colors.isColorSupported ? colors.bold(colors.magenta('END')) : 'END'}     ${resolve(ROOT, file)} ${
                    colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : ''
                }`
            );
        }
    }

    log.endGroup();
    process.exit(failed ? 1 : 0);
}

main().catch((ex) => {
    log.error(ex);
    process.exit(1);
});
