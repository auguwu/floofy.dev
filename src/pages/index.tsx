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
        <meta name="theme-color" content="#bb7fda" />
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
        <Container as={Stack} maxW="6xl" py={4} justifyContent="center" alignItems="center">
          <Link href="https://twitter.com/rrinuwu" target="_blank">
            <Image src="https://cdn.floofy.dev/images/noel_winter_gay.png" width="300px" draggable="false" />
          </Link>

          <Text fontSize="4xl" fontFamily="Handlee">
            Noel{' '}
            <Text as="span" fontSize="1.2rem">
              he/him
            </Text>
          </Text>

          <Center as={Stack}>
            <Text fontSize="1.5rem" fontWeight="700" maxW={{ base: '35%', md: '54%' }} wordBreak="break-word">
              Fullstack developer at age {age}, intermediate dev-ops.
            </Text>
          </Center>

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

            <NavLink href="https://github.com/auguwu">
              <FontAwesomeIcon icon={['fab', 'github']} color={useColorModeValue('#333333', 'gray.100')} size="2x" />
            </NavLink>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

/*
          <Flex h={16} flexDirection="column" alignItems="center" justifyContent="center" placeItems="flex-start">
            <Text fontSize="2.4rem" fontWeight="800">
              Noel{' '}
              <Text as="span" fontSize="1.2rem">
                he/him
              </Text>
            </Text>

            <Text fontSize="1.5rem" fontWeight="700">
              {age} year old developer - fullstack, intermediate devops, certified cutie.
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

              <NavLink href="https://github.com/auguwu">
                <FontAwesomeIcon icon={['fab', 'github']} color={useColorModeValue('#333333', 'gray.100')} size="2x" />
              </NavLink>
            </Flex>
          </Flex>
        </Container>

        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          mt={{ base: '4rem', md: '2rem' }}
        >
          <Flex h={16} flexDirection="column" alignItems="center" justifyContent="center" placeItems="flex-start">
            <Text>
              <FontAwesomeIcon icon={['fas', 'heart']} /> since {Math.floor(now.diff(takenSince, ['months']).months)}{' '}
              months ago :3
            </Text>

            {weather !== null ? (
              <Text onMouseOver={toggleFaren}>
                <FontAwesomeIcon icon={['fas', 'cloud']} /> {Math.floor(calcWeather(weather.main.temp))} °
                {faren ? 'F' : 'C'} ~ {weather.name}, AZ
              </Text>
            ) : null}
          </Flex>
        </Container>
      </Box>

      <Footer />
*/
