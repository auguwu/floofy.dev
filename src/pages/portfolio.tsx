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

import * as luxon from 'luxon';

const projects: Record<string, any>[] = [
  {
    name: 'Nino',
    roles: ['Project Lead'],
    languages: ['TypeScript', 'Elixir', 'Go', 'React'],
    description:
      "Cute, advanced discord moderation bot made in Eris. Make your server cute and automated with utilities for you and your server moderators! ☆ ～('▽^人)",
    icon: 'https://cdn.floofy.dev/images/Nino.png',
  },

  {
    name: 'Arisu',
    roles: ['Founder', 'Project Lead'],
    languages: ['TypeScript', 'Go', 'React', 'GraphQL'],
    description: 'Translation made with simplicity, yet robust.',
    icon: 'https://cdn.arisu.land/lotus.png',
  },

  {
    name: 'profile.place',
    roles: ['Frontend'],
    languages: ['TypeScript', 'Elixir', 'Vue'],
    description: 'All your social profiles in one place.',
    icon: 'https://profile.place/assets/img/logo.png',
  },
];

export default function Portfolio() {
  return <></>;
}
