/*
 * 🐾 @noel/floofy.dev: Source code for floofy.dev and Noel's portfolio, a professional side of myself.
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

import {
  Container,
  Center,
  Avatar,
  AvatarBadge,
  Heading,
  Text,
  Box,
  Grid,
  Flex,
  useColorModeValue,
  Link,
  Spacer
} from '@chakra-ui/react';

import { KotlinPlainIcon, TypescriptOriginalIcon, GoOriginalIcon, JavascriptOriginalIcon } from 'react-devicons';
import { useMediaQuery } from '@react-hook/media-query';
import { Book, Star } from '@mui/icons-material';
import { useLanyard } from 'use-lanyard';
import { DateTime } from 'luxon';
import Head from 'next/head';
import useSwr from 'swr';

const githubFetcher = (key: string) => fetch(`https://api.github.com/users/${key}/repos`).then((res) => res.json());

const languageIcon = {
  kotlin: <KotlinPlainIcon style={{ marginTop: '0.21em' }} />,
  typescript: <TypescriptOriginalIcon style={{ marginTop: '0.21em' }} />,
  go: <GoOriginalIcon style={{ marginTop: '0.21em' }} />,
  javascript: <JavascriptOriginalIcon style={{ marginTop: '0.21em' }} />
};

export default function MainPage() {
  const birthday = DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = DateTime.now();
  const age = Math.floor(now.diff(birthday, ['years']).years);
  const discord = useLanyard('280158289667555328');
  const repos = useSwr('auguwu', githubFetcher);
  const hidden = useMediaQuery('(max-width: 1024px)');

  // this happens on the server
  if (!discord.data) return null;
  if (!repos.data) return null;

  // if (!sponsors.data) return null;

  const repositories = (repos.data ?? [])
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .filter((s: any) => !s.archived)
    .filter((s: any) => s.name !== 'auguwu') // remove readme.md thingy
    .map((s: any) => ({
      ...s,
      name: s.full_name.slice('auguwu/'.length),
      actual_full: s.full_name
    }))
    .slice(0, 6);

  let statusColor: string;
  switch (discord.data?.discord_status) {
    case 'online':
      statusColor = 'green.400';
      break;

    case 'idle':
      statusColor = 'yellow.300';
      break;

    case 'dnd':
      statusColor = 'red.600';
      break;

    case 'offline':
    case 'invisible':
    default:
      statusColor = 'gray.600';
      break;
  }

  return (
    <>
      <Head>
        <title>Chris 🌺</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`${age} year old developer tinkering with code, and sometimes it works! ପ(๑•ᴗ•๑)ଓ ♡`}
        />
        <meta name="theme-color" content="#FF69BD" />
        <meta
          property="og:description"
          content={`${age} year old developer tinkering with code, and sometimes it works! ପ(๑•ᴗ•๑)ଓ ♡`}
        />
        <meta property="og:title" content="Chris 🌺" />
        <meta property="og:image" content="https://cdn.floofy.dev/images/August.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floofy.dev" />
        <meta name="language" content="English" />
        <meta name="keywords" content="august, auguwu, noel, noelware" />
      </Head>

      <Container maxW={{ lg: '7xl', base: '3xl' }} rowGap="1em">
        <Center maxW="7xl" mt="2em" flexDirection="column" rowGap="1em" textAlign="center">
          <Avatar
            src="https://cdn.floofy.dev/images/August.png"
            width="185px"
            height="185px"
            draggable="false"
            name="August"
          >
            <AvatarBadge boxSize="50px" bg={statusColor} mb="0.95em" />
          </Avatar>

          <Heading as="h1" size="2xl">
            Chris 🌺{' '}
            <Text as="span" fontSize="md">
              [he/him]
            </Text>
          </Heading>

          <Text fontSize="x-large">
            {age} year old developer tinkering with code, and sometimes it works! ପ(๑•ᴗ•๑)ଓ ♡
          </Text>
        </Center>

        <Heading as="h1" size="2xl" mt="3rem">
          Wait... who are you?
        </Heading>

        <Text fontSize="large" mt="0.6rem">
          Welcome to my corner of the internet, my name is Chris. :) I am just a simple programmer that does frontend
          and backend for fun.
        </Text>

        <Heading as="h1" size="2xl" mt="3rem">
          Projects
        </Heading>

        <Text fontSize="large" mt="0.6rem">
          Here are some notable projects I have done!
        </Text>

        {/* mobile and desktop have different layouts for this */}
        <Grid gridGap={['1rem', '1rem']} gap={['1rem', '1rem']} mt="1.2rem" hidden={!hidden}>
          {repositories.map((repo: any) => (
            <Box
              key={`repo-${repo.full_name}`}
              bg={useColorModeValue('gray.300', '#232323')}
              rounded="md"
              shadow="md"
              px={2}
              py={3}
            >
              <Flex direction="row" gap={2} px={4} py={4}>
                <Book />
                <Link href={`https://github.com/${repo.actual_full}`} target="_blank">
                  <Text fontSize="md">{repo.name}</Text>
                </Link>
                <Spacer />
                {languageIcon[repo.language.toLowerCase()]}
                <Text fontSize="md">{repo.language}</Text>
              </Flex>

              <Text fontSize="lg" gap={2} px={4} py={4} mt="-1.2em">
                {repo.description}
              </Text>

              <Center>
                <Flex direction="row" gap={2} alignSelf="flex-end">
                  <Star /> {repo.stargazers_count}
                </Flex>
              </Center>
            </Box>
          ))}
        </Grid>

        <Grid
          gridGap={['1rem', '1rem']}
          flexDirection="row"
          gap={['1rem', '1rem']}
          templateColumns="repeat(2, 1fr)"
          mt="1.2rem"
          hidden={hidden}
        >
          {repositories.map((repo: any) => (
            <Box
              key={`repo-${repo.full_name}`}
              bg={useColorModeValue('gray.300', '#232323')}
              rounded="md"
              shadow="md"
              px={2}
              py={3}
              maxW="xl"
            >
              <Flex direction="row" gap={2} px={4} py={4}>
                <Book />
                <Link href={`https://github.com/${repo.actual_full}`} target="_blank">
                  <Text fontSize="md">{repo.name}</Text>
                </Link>
                <Spacer />
                {languageIcon[repo.language.toLowerCase()]}
                <Text fontSize="md">{repo.language}</Text>
              </Flex>

              <Text fontSize="lg" gap={2} px={4} py={4} mt="-1.2em">
                {repo.description}
              </Text>

              <Center bottom="0" position="relative" alignSelf="flex-end">
                <Flex direction="row" gap={2}>
                  <Star /> {repo.stargazers_count}
                </Flex>
              </Center>
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
}
