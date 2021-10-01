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

import { FaDiscord, FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import * as luxon from 'luxon';
import Image from 'next/image';

const socials = {
  discord: 'https://discord.gg/JjHGR6vhcG',
  github: 'https://github.com/auguwu',
  twitter: 'https://twitter.com/auguuwu',
  telegram: 'https://t.me/auguwu',
};

export default function NoelSite() {
  const birthday = luxon.DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = luxon.DateTime.fromJSDate(new Date());
  const age = Math.floor(now.diff(birthday, ['years']).years);
}
