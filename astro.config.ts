/*
 * 🐾 @noel/site: Noel's personal website, blog, and documentation site made with Astro
 * Copyright (c) 2018-2025 Noel Towa <cutie@floofy.dev>
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

import { defineConfig } from 'astro/config';
import githubAlerts from 'remark-github-alerts';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import twemoji from 'remark-twemoji';
import node from '@astrojs/node';
import icon from 'astro-icon';

export default defineConfig({
    integrations: [tailwind(), sitemap(), icon()],
    adapter: node({ mode: 'standalone' }),
    output: 'server',
    site: 'https://floofy.dev',

    markdown: {
        remarkPlugins: [twemoji, githubAlerts],
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'poimandres',
            wrap: true
        }
    }
});
