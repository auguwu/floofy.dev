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
} from '@chakra-ui/react';

import { KotlinPlainIcon, TypescriptOriginalIcon, GoOriginalIcon, JavascriptOriginalIcon } from 'react-devicons';
import { DateTime } from 'luxon';
import Head from 'next/head';

export default function MainPage() {
  const birthday = DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = DateTime.now();
  const age = Math.floor(now.diff(birthday, ['years']).years);

  return (
    <>
      <Head>
        <title>404 | Chris 🌺</title>
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
          <Heading as="h1" size="2xl">
            404
          </Heading>

          <Text fontSize="x-large">
            Page Not Found
          </Text>
        </Center>
      </Container>
    </>
  );
}
