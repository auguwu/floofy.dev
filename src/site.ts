/*
 * 🐾 floofy.dev: Noel's personal website, blog, and documentation site made with Astro
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

export const BASE = 'https://floofy.dev' as const;

export function toBaseUrl(...paths: string[]) {
    const base = process.env.NODE_ENV === 'development' ? 'http://localhost:4321' : BASE;
    if (paths.length === 0) {
        return base;
    }

    const joined = paths
        .map((f) => `/${f}`)
        .join('')
        .replaceAll('//', '/');

    return `${base}${joined}`;
}

export const credits = {
    'avatar:furry': 'https://twitter.com/SabikSphinx',
    wallpaper: 'https://www.pixiv.net/en/artworks/100766079'
} as const;
