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

import { faDiscord, faTwitter, faTelegram, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import * as luxon from 'luxon';
import * as core from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import Link from 'next/link';

core.library.add(faDiscord, faTwitter, faTelegram, faGithub, faSteam, faBriefcase);

export default function NoelSite() {
  const birthday = luxon.DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = luxon.DateTime.fromJSDate(new Date());
  const age = Math.floor(now.diff(birthday, ['years']).years);

  return (
    <>
      <div className="flex text-white h-screen justify-center items-center">
        <div className="container-content">
          <div>
            <Image
              src="https://cdn.floofy.dev/images/August.png"
              width="175px"
              height="175px"
              draggable="false"
              className="rounded-[50%] block m-auto"
            />
          </div>

          <div className="container-right">
            <h1 className="heading-1 font-bold">Noel 🎀</h1>
            <h2 className="heading-2 font-semibold">
              {age} year old developer and furry, creating projects no one will use.
              <br />
              Loves coffee, coding, and music.
            </h2>

            <div className="lg:text-center lg:gap-3 lg:grid-cols-6 lg:m-[-0.20rem] lg:absolute lg:grid lg:mt-3 hidden">
              <a
                className="button-discord"
                href="https://discord.com/users/280158289667555328"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={['fab', 'discord']} size="2x" />
              </a>
              <a className="button-twitter" href="https://twitter.com/auguuwu" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
              </a>
              <a className="button-telegram" href="https://t.me/auguwu" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'telegram']} size="2x" />
              </a>
              <a className="button-github" href="https://github.com/auguwu" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
              </a>
              <a className="button-steam" href="https://steamcommunity.com/id/auguwu" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'steam']} size="2x" />
              </a>
              <a className="button-portfolio" href="/portfolio/" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fas', 'briefcase']} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="left-[0] bottom-[0]"></div>

      <style jsx global>{`
        body {
          background-blend-mode: overlay;
          background-attachment: fixed;
          background-position: center;
          background-image: url(https://cdn.floofy.dev/bg.jpg);
          background-color: #232323;
          background-size: cover;
        }
      `}</style>
    </>
  );
}
