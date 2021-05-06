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

import Twemoji from '../components/Twemoji';
import Image from 'next/image';

export default function Homepage() {
  const current = new Date();
  const year = `2018-${current.getFullYear()}`;

  return <>
    <div className='container'>
      <div className='container-content'>
        <div className='container-left'>
          <Image
            src='https://cdn.floofy.dev/images/trans.png'
            className='avatar'
            alt='trans heart'
            width={234}
            height={234}
            draggable='false'
          />
        </div>
        <div className='container-right'>
          <h1 className='heading-1'>
            Noel <Twemoji emoji='🥀' />
          </h1>
          <h2 className='heading-2'>
            Student, Developer in the United States creating
            <br />
            projects no one will use except for myself. (^・ω・^ )
          </h2>

          <div className='social-row'>

          </div>
        </div>
      </div>
    </div>

    <footer className='footer'>
      <p>
        pawbs uwu | &copy; {year} <Twemoji emoji='💖' /> (art is not by me)
      </p>
    </footer>
  </>;
}
