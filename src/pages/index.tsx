/**
 * Copyright (c) 2018-2021 August
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as luxon from 'luxon';
import * as core from '@fortawesome/fontawesome-svg-core';
import Twemoji from '../components/Twemoji';
import Image from 'next/image';

core.library.add(
  brands.faDiscord,
  brands.faTwitter,
  brands.faTelegram,
  brands.faPaypal,
  brands.faGithub,
  brands.faSteam,
  brands.faLastfm
);

const socials = {
  discord: {
    icon: ['fab', 'discord'],
    link: 'https://discord.gg/JjHGR6vhcG'
  },
  github: {
    icon: ['fab', 'github'],
    link: 'https://github.com/auguwu'
  },
  twitter: {
    icon: ['fab', 'twitter'],
    link: 'https://twitter.com/rainyynoel'
  },
  telegram: {
    icon: ['fab', 'telegram'],
    link: 'https://t.me/auguwu'
  },
  paypal: {
    icon: ['fab', 'paypal'],
    link: 'https://paypal.me/auguwu'
  },
  steam: {
    icon: ['fab', 'steam'],
    link: 'https://steamcommunity.com/id/auguwu'
  },
  lastfm: {
    icon: ['fab', 'lastfm'],
    link: 'https://last.fm/user/auguwu'
  }
};

export default function Homepage() {
  const current = new Date();
  const year = `2018-${current.getFullYear()}`;

  const birthday = luxon.DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = luxon.DateTime.fromJSDate(current);
  const age = Math.floor(now.diff(birthday, ['years']).years);

  return <>
    <div className='container'>
      <div className='container-content'>
        <div className='container-left'>
          <Image
            src='https://cdn.floofy.dev/images/August.png'
            className='avatar'
            alt='avy'
            width={234}
            height={234}
            draggable='false'
          />
        </div>
        <div className='container-right'>
          <h1 className='heading-1'>
            Noel <Twemoji emoji='🎀' />
          </h1>
          <h2 className='heading-2'>
            {age} year old student and developer in the United States <br />
            who makes projects that no one will use. <br />
            ☆*✲୧( ○ ╹ 〰 ╹ ○ )୨✲*☆
          </h2>

          <div className='social-row'>
            {Object.entries(socials).map(([key, social]) =>
              <a href={social.link} className={`button-${key}`} key={`social-button-${key}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={social.icon as any} size='2x' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

    <footer className='footer'>
      <p>
        pawbs uwu ~ &copy; {year} (art is not by me) ~ <a href='https://github.com/auguwu/paw' target='_blank' rel='noreferrer'>Source Code</a>
      </p>
    </footer>
  </>;
}
