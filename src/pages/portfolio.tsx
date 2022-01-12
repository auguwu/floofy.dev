/*
 * Copyright (c) 2018-2022 Noel
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

import { Box, Container, Stack, Text, Flex, Image, Center, Link, Grid, GridItem } from '@chakra-ui/react';

import type { GetStaticProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as luxon from 'luxon';
import Head from 'next/head';

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

      <Box height="87.8vh">
        <Container as={Stack} maxW="6xl" py={4} justifyContent="center" alignItems="center">
          <Image
            src="https://cdn.floofy.dev/images/August.png"
            width="164px"
            height="164px"
            draggable="false"
            rounded="full"
          />

          <Center>
            <Text fontSize="4xl" fontFamily="Inter">
              Chris Hernandez{' '}
              <Text fontSize="large" fontFamily="Handlee">
                (also known as "Noel", "August")
              </Text>
            </Text>
          </Center>
        </Container>

        <Flex direction={{ base: 'column', md: 'row' }} mt="4" maxW="100%">
          <Container my="2" overflow="hidden" w={{ base: '1/2', md: '1/3' }}>
            <Center>
              <Text fontSize="2xl" fontWeight="800">
                Who are you?
              </Text>
            </Center>

            <Center>
              <Text fontSize="large" w="75%" wordBreak="break-word" mt="4">
                Welcome to my portfolio! I am Chris, also known as Noel or August on the internet! (you can call me
                anything, I don't mind!) I am a developer that mainly writes in TypeScript, Kotlin, and Go! I use
                TypeScript for my frontend work, Kotlin for anything miscellaneous, and Go for server-side applications.
                I live in Arizona, with my family in Phoenix. I wish it had real seasons, but that'll never happen. :(
              </Text>
            </Center>
          </Container>

          <Container my="2" overflow="hidden" w={{ base: '1/2', md: '1/3' }}>
            <Center>
              <Text fontSize="2xl" fontWeight="800">
                What made you want to code?
              </Text>
            </Center>

            <Center>
              <Text fontSize="large" w="75%" wordBreak="break-word" mt="4">
                Honestly, being a software developer wasn't in my career choices as a child, I didn't even know that in
                2012 when I first joined the internet that you can write code with specific instructions and it'll just
                do it, without any warning and I thought that was so cool. I wanted to be an actor that does
                performances and such, though I am taking theater classes in my high school, which is fun!
                <br />
                <br />I discovered programming in general within the Discord Bot community back in 2017, when it was
                cool to create bots, but right now, it's really... bad at the moment. (within my experience)
                <br />I taught myself JavaScript back in 2017 on a mini laptop I was using for miscellanous stuff, I
                couldn't really do any gaming on it, which was kinda sad. I made my first Discord Bot, "Ayane" (was
                renamed to YumiBoat), and that's really what jump started me to code.
              </Text>
            </Center>
          </Container>

          <Container my="2" overflow="hidden" w={{ base: '1/2', md: '1/3' }}>
            <Center>
              <Text fontSize="2xl" fontWeight="800">
                What are your plans for the future?
              </Text>
            </Center>

            <Center>
              <Text fontSize="large" w="75%" wordBreak="break-word" mt="4">
                Honestly, I plan to go to college to further out know more about the software field and business, in
                general. I been building out a company, as in, planning what to release and how I can be successful.
              </Text>
            </Center>
          </Container>
        </Flex>

        <Container
          as={Stack}
          mt={{ base: '2rem', md: '8rem' }}
          maxW="container.xl"
          py="8"
          px="4"
          alignItems="center"
          justifyContent="center"
        >
          <Flex>
            <FontAwesomeIcon icon={['fas', 'bookmark']} size="2x" style={{ marginTop: '0.5rem' }} />
            <Text fontSize="4xl" fontFamily="Handlee" ml="4">
              Projects
            </Text>
          </Flex>

          <Text fontSize="2xl">This is a list of projects that I am currently working on.</Text>

          <Flex direction="column">
            <Stack mt={6} direction="row" spacing={4} align="center" shadow="lg" py={4} px={4}>
              <Image src="https://cdn.arisu.land/lotus.png" width="64px" height="64px" draggable="false" />
              <Stack direction="column" spacing={0} fontSize="sm">
                <Link href="https://github.com/auguwu/Arisu" target="_blank">
                  <Text fontWeight={800} fontSize="2xl" fontFamily="Handlee">
                    Arisu
                  </Text>
                </Link>
                <Text fontSize="large">Open source translation site made with simplicity and fast in mind</Text>
              </Stack>
            </Stack>

            <Stack mt={6} direction="row" spacing={4} align="center" shadow="lg" py={4} px={4}>
              <Image src="https://cdn.floofy.dev/images/Nino.png" width="64px" height="64px" draggable="false" />
              <Stack direction="column" spacing={0} fontSize="sm">
                <Link href="https://nino.sh" target="_blank">
                  <Text fontWeight={800} fontSize="2xl" fontFamily="Handlee">
                    Nino
                  </Text>
                </Link>
                <Text fontSize="large">
                  Advanced and cute Discord moderation bot made in{' '}
                  <Link href="https://github.com/kordlib/kord">Kord</Link>.
                </Text>
              </Stack>
            </Stack>

            <Stack mt={6} direction="row" spacing={4} align="center" shadow="lg" py={4} px={4}>
              <Image src="https://profile.place/assets/img/logo.svg" width="64px" height="64px" draggable="false" />
              <Stack direction="column" spacing={0} fontSize="sm">
                <Link href="https://profile.place" target="_blank">
                  <Text fontWeight={800} fontSize="2xl" fontFamily="Handlee">
                    profile.place
                  </Text>
                </Link>
                <Text fontSize="large">All your social profiles in one place.</Text>
              </Stack>
            </Stack>
          </Flex>
        </Container>

        <Container
          as={Stack}
          mt={{ base: '2rem', md: '4rem' }}
          maxW="container.xl"
          py="8"
          px="4"
          alignItems="center"
          justifyContent="center"
        >
          <Flex maxW="75%" wordBreak="break-word">
            <FontAwesomeIcon icon={['fas', 'heart']} size="2x" style={{ marginTop: '0.5rem' }} />
            <Text fontSize="4xl" fontFamily="Handlee" ml="4">
              Sponsors
            </Text>
          </Flex>

          <Text fontSize="2xl">
            I would like to thank these individuals who have sponsored me on{' '}
            <Link href="https://github.com/sponsors/auguwu">GitHub</Link>!
          </Text>

          <Grid gap="6" templateColumns="repeat(3, 1fr)">
            <GridItem>
              <Text>blep</Text>
            </GridItem>

            <GridItem>
              <Text>blep</Text>
            </GridItem>

            <GridItem>
              <Text>blep</Text>
            </GridItem>

            <GridItem>
              <Text>blep</Text>
            </GridItem>

            <GridItem>
              <Text>blep</Text>
            </GridItem>

            <GridItem>
              <Text>blep</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
