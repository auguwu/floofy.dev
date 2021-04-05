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

import Image from 'next/image';

export default function Homepage() {
  return <>
    {/* widescreen here, credit: https://github.com/dondish/personal-site/blob/master/src/components/MainHero.vue */}
    <div className='flex flex-col relative h-screen lg:p-16 z-50 justify-center'>
      <div
        className='lg:shadow-lg lg:text-left lg:container lg:grid lg:grid-cols-4 lg:rounded lg:pt-8 lg:h-auto lg:mx-auto text-center w-full block pt-12 p-8 gap-3 h-screen'
        style={{ backgroundColor: '#383B47' }}
      >
        <div className='flex justify-center mx-auto'>
          <Image
            src='https://cdn.floofy.dev/images/trans.png'
            className='avatar'
            alt='trans heart'
            width={242}
            height={242}
            draggable='false'
          />
        </div>

        <div className='lg:justify-none lg:col-span-3 justify-center'>
          <h1 className='lg:inline lg:my-2 lg:text-5xl align-baseline mt-2 text-white text-2xl'>Noel 🌺</h1>
          <br />
          <span className='lg:inline lg:ml-2 lg:text-3xl mb-6 align-baseline text-xl text-gray-300'><i>blep!</i></span>
          <br />
          <br />
          <p className='mb-4 text-white font-mono text-justify'>
            Student, Developer in the United States creating projects no one will use except for myself. (^・ω・^ )
            <br />
            <br />
            Oh hey there, my name is Chris and I am a 17 year old developer and student. I like <a href='https://last.fm/user/auguwu' target='_blank'>music</a>, <a href='https://wakatime.com/@auguwu' target='_blank'>coding</a>,
            and playing <a href='https://steamcommunity.com/id/auguwu'>video games</a>! View below about my projects I maintain and people who have sponsored me on <a href='https://github.com/sponsors/auguwu'>GitHub</a>!
          </p>
        </div>
      </div>
    </div>
  </>;
}
