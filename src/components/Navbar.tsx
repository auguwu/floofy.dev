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

import { Container, Stack, Text, Flex, HStack, Link, Button, useColorMode } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';

export const NavLink: FC<{ href: string }> = ({ children, href }) => (
  <Link
    px={2}
    py={2}
    rounded="md"
    href={href}
    target={href.startsWith('/') ? undefined : '_blank'}
    _hover={{
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      direction={{ base: 'column', md: 'row' }}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={4} alignItems="center" as="nav" display="flex">
          <NavLink href="/">
            <Text fontWeight="400" fontSize="1rem">
              Home
            </Text>
          </NavLink>

          <NavLink href="/portfolio">
            <Text fontWeight="400" fontSize="1rem">
              Portfolio
            </Text>
          </NavLink>

          <Button onClick={toggleColorMode} size="sm">
            <FontAwesomeIcon icon={['fas', 'cloud-moon-rain']} />
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
