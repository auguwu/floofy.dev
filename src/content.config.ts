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

import { defineCollection, z } from 'astro:content';
import { resolve } from 'node:path';
import { glob } from 'astro/loaders';

// const blog = defineCollection({
//     loader: glob({ pattern: '**/*.{md,mdx}', base: resolve(import.meta.dirname, 'content/blog') }),
//     schema: z.object({
//         title: z.string(),
//         description: z.string(),
//         createdAt: z.date(),
//         tags: z.array(z.string()).default([]),
//         draft: z.boolean().default(false)
//     })
// });

const docs = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: resolve(import.meta.dirname, '../content/docs') }),
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
});

// const oss = defineCollection({
//     loader: glob({ pattern: '**/*.{md,mdx}', base: resolve(import.meta.dirname, 'content/oss') }),
//     schema: z.object({
//         project: z.string(),
//         description: z.string(),
//         emojis: z.array(z.string()).default(['fluent-emoji:polar-bear'])
//     })
// });

export const collections = {
    ///blog,
    docs
    ///oss
};
