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
    icon: 'https://profile.place/assets/img/logo.png',
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

export default function Portfolio() {
  return (
    <pre>
      <code>{JSON.stringify(projects)}</code>
    </pre>
  );
}
