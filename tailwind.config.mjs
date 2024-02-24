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

import defaultConfig from 'tailwindcss/defaultConfig';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [typography],
    theme: {
        extend: {
            fontFamily: {
                // @ts-ignore
                sans: ['"Open Sans"', ...defaultConfig.theme.fontFamily.sans],

                // @ts-ignore
                mono: ['"JetBrains Mono"', ...defaultConfig.theme.fontFamily.mono],

                // @ts-ignore
                serif: ['Cantarell', ...defaultConfig.theme.fontFamily.serif]
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        // removes the `"` from blockquotes
                        'blockquote p:first-of-type::before': null,
                        'blockquote p:first-of-type::after': null,

                        // removes the '`' from <code> elements
                        'code::before': null,
                        'code::after': null,
                        code: {
                            color: theme('colors.rose[200]'),
                            backgroundColor: theme('colors.gray[800]')
                        }
                    }
                }
            })
        }
    }
};
