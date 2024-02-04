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

import * as astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';
import { fileURLToPath } from 'url';

// Node (`ESLINT_FLAT_CONFIG=1 npx eslint`):
//      > import('@augu/eslint-config'):
//      [Module: null prototype] {
//        default: {
//          default: [Getter],
//          javascript: [Getter],
//          perfectionist: [Getter],
//          typescript: [Getter],
//          vue: [Getter]
//        },
//        javascript: [Function: javascript],
//        perfectionist: [AsyncFunction: perfectionist],
//        typescript: [AsyncFunction: typescript],
//        vue: [AsyncFunction: vue]
//      }
//
// Bun:
//     > bun run lint
//     Module {
//       default: [Function: noel],
//       javascript: [Function: javascript],
//       perfectionist: [Function: perfectionist],
//       typescript: [Function: typescript],
//       vue: [Function: vue],
//     }
const noel = await import('@augu/eslint-config').then((mod) =>
    typeof Bun !== 'undefined' ? mod.default : mod.default.default
);

const configs = await noel({
    perfectionist: true,
    typescript: {
        tsconfig: fileURLToPath(new URL('.', import.meta.url))
    }
});

// TODO(@auguwu): add this in @augu/eslint-config
configs.push({
    ignores: ['**/*.astro']
    // languageOptions: {
    //     parser: astroParser,
    //     sourceType: 'module'
    // },
    // plugins: {
    //     astro
    // },
    // rules: astro.configs.recommended.rules
});

export default configs;
