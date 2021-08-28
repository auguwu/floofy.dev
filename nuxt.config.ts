/**
 * Copyright (c) 2018-2021 Noel
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

/* eslint-disable camelcase */

import type { NuxtConfig } from '@nuxt/types';

const redirects = [
  {
    id: 'discord',
    redirect: 'https://discord.gg/JjHGR6vhcG',
  },
  {
    id: 'github',
    redirect: 'https://github.com/auguwu',
  },
  {
    id: 'twitter',
    redirect: 'https://twitter.com/auguuwu',
  },
  {
    id: 'telegram',
    redirect: 'https://t.me/auguwu',
  },
  {
    id: 'steam',
    redirect: 'https://steamcommunity.com/id/auguwu',
  },
];

const config: NuxtConfig = {
  target: 'static',
  modern: process.env.NODE_ENV === 'production' && 'client',
  srcDir: 'src',
  dir: {
    pages: 'views',
  },

  head: {
    title: 'Noel 🐾',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },

  plugins: ['~/plugins/logger'],

  generate: {
    fallback: true,
    subFolders: false,
    routes() {
      return ([] as string[]).concat(redirects.map((s) => `/${s.id}`));
    },
    interval: 2000, // allow async funcs to resolve (issue with @nuxtjs/composition-api ~ https://composition-api.nuxtjs.org/getting-started/setup)
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  sitemap: {
    hostname: 'floofy.dev',
    exclude: [],
    filter({ routes }) {
      return routes.filter((rou: any) => !redirects.find((red) => `/${red.id}` === rou.url));
    },
    defaults: {
      lastmod: new Date(),
    },
  },

  tailwindcss: {
    exposeConfig: true,
  },

  pwa: {
    description: '✧ ─=≡Σ((( つ•̀ω•́)つ nyoom!!!',
    theme_color: '#C54B8C',
    ogDescription: "✧ ─=≡Σ((( つ•̀ω•́)つ nyoom!!! it's me noel! welcome to my website :33",
    ogTitle: 'Noel 🐾',
    ogImage: true,
    ogSiteName: 'Noel ~ cutie making software :o',
    twitterCard: 'summary',
    twitterSite: '@auguuwu',
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHeart', 'faLaptop'],
      brand: ['faDiscord', 'faGitHub', 'faTelegram', 'faSteam', 'faTwitter'],
    },
  },

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
};

export default config;
