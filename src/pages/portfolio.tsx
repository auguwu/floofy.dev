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

import * as luxon from 'luxon';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps } from 'next';

const projects: Record<string, any>[] = [
  {
    name: 'Nino',
    roles: ['Project Lead'],
    languages: ['TypeScript', 'Kotlin', 'Go'],
    tech_stack: ['Docker', 'Kubernetes', 'React'],
    description:
      "Cute, advanced discord moderation bot made in Eris. Make your server cute and automated with utilities for you and your server moderators! ☆ ～('▽^人)",
    icon: 'https://cdn.floofy.dev/images/Nino.png',
    created_at: luxon.DateTime.fromJSDate(new Date(2019, 5, 23)),
  },

  {
    name: 'Arisu',
    roles: ['Founder', 'Project Lead'],
    languages: ['TypeScript', 'Go', 'GraphQL'],
    tech_stack: ['Docker', 'Kubernetes', 'React'],
    description: 'Translation made with simplicity, yet robust.',
    icon: 'https://cdn.arisu.land/lotus.png',
    created_at: luxon.DateTime.fromJSDate(new Date(2020, 4, 31)),
  },

  {
    name: 'profile.place',
    roles: ['Frontend'],
    languages: ['TypeScript', 'Elixir'],
    tech_stack: ['Docker', 'Kubernetes', 'Vue'],
    description: 'All your social profiles in one place.',
    icon: 'https://profile.place/assets/img/logo.svg',
    created_at: luxon.DateTime.fromJSDate(new Date(2020, 6, 17)),
  },
];

const colors = {
  TypeScript: '#2b7489',
  Go: '#00ADD8',
  Elixir: '#6e4a7e',
  Vue: '#41b883',
  React: '#61dbfb',
  GraphQL: '#e10098',
  Kotlin: '#A97BFF',
  Kubernetes: '#326ce5',
  Docker: '#0db7ed',
};

const icons = {
  TypeScript: <i className="devicon-typescript-plain" />,
  Docker: <i className="devicon-docker-plain" />,
  Go: <i className="devicon-go-plain" />,
  Elixir: <i className="devicon-elixir-plain" />,
  Kubernetes: <i className="devicon-kubernetes-plain" />,
  Vue: <i className="devicon-vuejs-plain" />,
  React: <i className="devicon-react-original" />,
  Kotlin: <i className="devicon-graphql-plain" />,
  GraphQL: <i className="devicon-graphql-plain" />,
};

interface SponsorData {
  joinedAt: Date;
  customTier: boolean;
  tier: string;
  followers: number;
  following: number;
  websiteUrl: string | null;
  twitterHandle: string | null;
  avatarUrl: string;
  company: string;
  login: string;
  name: string | null;
  bio: string;
}

export const getStaticProps: GetStaticProps<{ sponsors: SponsorData[] }> = async () => {
  const res = await fetch('https://api.floofy.dev/sponsors/auguwu');
  const data = await res.json().then((d) => d.sponsors.data);

  return {
    props: {
      sponsors: data.map((d: any) => ({
        joinedAt: d.joined_at,
        customTier: d.tier.custom_amount,
        tier: d.tier.name,
        followers: d.followers,
        following: d.following,
        twitterHandle: d.twitter_handle,
        avatarUrl: d.avatar_url,
        company: d.company,
        login: d.login,
        name: d.name,
        bio: d.bio,
        websiteUrl: d.website_url,
      })),
    },
  };
};

export default function Portfolio({ sponsors }: { sponsors: SponsorData[] }) {
  const birthday = luxon.DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = luxon.DateTime.fromJSDate(new Date());
  const age = Math.floor(now.diff(birthday, ['years']).years);

  const programmingDate = luxon.DateTime.fromJSDate(new Date(2017, 1));
  const programmingAge = Math.floor(now.diff(programmingDate, ['years']).years);

  return (
    <>
      <Head>
        <title>Noel's Portfolio</title>
        <meta
          property="og:description"
          content="Noel's Portfolio showcasing his work, if you're interested in that. (⇀‸↼‶)"
        />
        <meta property="og:title" content="Noel - Portfolio" />
        <meta property="og:image" content="https://cdn.floofy.dev/images/August.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floofy.dev/portfolio" />
      </Head>

      <div className="text-white flex flex-col container mx-auto justify-center items-center mt-6">
        <Image
          src="https://cdn.floofy.dev/images/August.png"
          width="175px"
          height="175px"
          draggable="false"
          className="rounded-[50%] block m-auto"
        />

        <span className="font-quicksand text-3xl mt-4 font-semibold">Chris Hernandez (also known as Noel, August)</span>
        <span className="font-nunito text-lg mt-2 font-medium">
          Fullstack Developer and Intermediate DevOps by day; gay furry at night.
        </span>
      </div>

      <div className="text-white flex flex-row container mx-auto mt-7">
        <div className="my-2 overflow-hidden w-1/2 md:w-1/3">
          <span className="font-quicksand text-2xl font-semibold">Who are you exactly?</span>
          <p className="font-nunito text-lg font-normal w-[75%] break-words mt-4">
            I'm glad you asked! I wish I knew also. :( All jokes aside, my name is Chris! I am a {age} year old
            fullstack developer learning programming, like your average teenager... right? Is that how it works?
            Probably not, guess I am just weird.
          </p>
        </div>

        <div className="my-2 overflow-hidden w-1/2 md:w-1/3">
          <span className="font-quicksand text-2xl font-semibold">So, how did you get into programming?</span>
          <p className="font-nunito text-lg font-normal w-[75%] break-words mt-4">
            Funny story that you mention it, or I have... since I am writing this alone in my bedroom as we speak.
            Anyway, it started back in Febuary of 2017 (wow, it's been {programmingAge} years already?), when I joined
            Discord around that time, and I keep seeing fancy Discord bots (back then it was like Ayana and such) and I
            wanted to create one, so I learned JavaScript and it has been {programmingAge} years, and this is where I am
            headed in the future. Damn, switching from an actor towards a software engineer and business leader, mark
            that off the bucket list!
            <a href="https://cute.floofy.dev/images/bcfe9a7a.png" className="cursor-pointer" target="_blank">
              <img src="https://cute.floofy.dev/images/bcfe9a7a.png" alt="fuck they know my secret" draggable="false" />
            </a>
          </p>
        </div>

        <div className="my-2 overflow-hidden w-1/2 md:w-1/3">
          <span className="font-quicksand text-2xl font-semibold">So, what the heck do you do in your spare time?</span>
          <p className="font-nunito text-lg font-normal w-[75%] break-words mt-4">
            It's easy! I go into a big depression. Nah, I'm just joking. All I do is go to school, work, eat, and sleep.
            All that repeated until I am done graduating high school, I am in my 4th year and plan to go to college in
            California for Computer Science and Business, don't know where to go yet.
          </p>
        </div>
      </div>

      <div className="text-white flex flex-col container mx-32 mt-16">
        <h1 className="font-nunito text-4xl font-semibold">Sponsors</h1>
        <h2 className="font-quicksand text-2xl">
          Here is some lovely people who have donated to me! You can sponsor me on{' '}
          <a href="https://github.com/sponsors/auguwu" target="_blank" rel="noopenner">
            GitHub
          </a>
          ~
        </h2>
        {/* <div className="container mx-auto flex flex-row relative mt-5">
          {sponsors.map((sponsor) => (
            <div className="rounded-3xl overflow-hidden shadow-xl w-full my-3 bg-gray-500 mr-5">
              <div className="flex flex-col container mx-auto my-6">
                <img
                  src={sponsor.avatarUrl}
                  alt={`${sponsor.name ?? sponsor.login}'s avatar on GitHub`}
                  width="95px"
                  height="95px"
                  className="rounded-[50%]"
                />
              </div>

              <h3 className="font-nunito font-semibold text-lg">{sponsor.name ?? sponsor.login}</h3>
            </div>
          ))}
        </div> */}
      </div>

      <div className="text-white flex flex-col container mx-32 mt-16">
        <h1 className="font-nunito text-4xl font-semibold">Projects</h1>
        <h2 className="font-quicksand text-2xl">Finally, here is a list of projects I am involved in.</h2>
      </div>

      <div className="mb-24" />

      <style jsx global>{`
        body {
          background-color: #282d40;
        }
      `}</style>
    </>
  );
}
