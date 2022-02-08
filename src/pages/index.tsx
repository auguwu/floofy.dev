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

import { Box, Container, Stack, Text, Flex, useColorModeValue, Image, Link, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from '../components/Navbar';
import * as luxon from 'luxon';
import Head from 'next/head';

export default function MainPage() {
  const birthday = luxon.DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = luxon.DateTime.now();
  const age = Math.floor(now.diff(birthday, ['years']).years);

  return (
    <>
      <Head>
        <title>Noel 🎀</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Student and developer in the United States who makes projects that no one will use. ☆*✲୧( ○ ╹ 〰 ╹ ○ )୨✲*☆"
        />
        <meta name="theme-color" content="#FF69BD" />
        <meta
          property="og:description"
          content="Student and developer in the United States who makes projects that no one will use. ☆*✲୧( ○ ╹ 〰 ╹ ○ )୨✲*☆"
        />
        <meta property="og:title" content="Noel 🎀" />
        <meta property="og:image" content="https://cdn.floofy.dev/images/August.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floofy.dev" />
      </Head>

      <Box height="87.8vh">
        <Container as={Stack} maxW="7xl">
          <Image
            src="https://cdn.floofy.dev/images/August.png"
            width="250px"
            height="250px"
            draggable="false"
            rounded="full"
            alt="noel avatar by @SevernSamuel on twitter!"
          />

          <Text fontSize="4xl" fontFamily="Cantarell">
            Noel{' '}
            <Text as="span" fontSize="1.2rem">
              [he/him]
            </Text>
          </Text>

          <Text fontSize="2xl" fontFamily="Inter">
            i wish i did things better but i ruined it for the both of us, now i must suffer the consequences. thanks
            for being there, you know who you are. promise me you'll be happy, for me, please?
          </Text>

          <Flex ml="-0.6em">
            <NavLink href="https://discord.com/users/280158289667555328">
              <FontAwesomeIcon icon={['fab', 'discord']} color="#5865F2" size="2x" />
            </NavLink>

            <NavLink href="https://twitter.com/auguuwu">
              <FontAwesomeIcon icon={['fab', 'twitter']} color="#1DA1F2" size="2x" />
            </NavLink>

            <NavLink href="https://t.me/auguwu">
              <FontAwesomeIcon icon={['fab', 'telegram']} color="#0088CC" size="2x" />
            </NavLink>

            <NavLink href="https://discord.com/users/280158289667555328">
              <FontAwesomeIcon icon={['fab', 'github']} color={useColorModeValue('#333333', 'gray.400')} size="2x" />
            </NavLink>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
