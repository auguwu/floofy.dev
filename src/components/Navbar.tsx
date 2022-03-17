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

import { type LinkProps, Link, useColorMode, Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import type { FC } from 'react';

interface NavLinkProps extends LinkProps {
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ children, href, ...props }) => (
  <Link
    px={4}
    py={4}
    rounded="md"
    href={href}
    target={href.startsWith('/') ? undefined : '_blank'}
    _hover={{
      textDecoration: 'none',
      backgroundColor: useColorModeValue('gray.300', '#232323'),
    }}
    {...props}
  >
    {children}
  </Link>
);

const Navbar: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box h="100%" w="100%">
      <Flex
        direction="row"
        h="100%"
        w="100%"
        alignItems={{ base: 'center', lg: 'right' }}
        justifyContent={{ base: 'center', lg: 'right' }}
      >
        <NavLink href="/" mr="12">
          Home
        </NavLink>

        <NavLink href="https://twitter.com/auguuwu" mr="12">
          Twitter
        </NavLink>

        <NavLink href="https://github.com/auguwu" mr="12">
          GitHub
        </NavLink>

        <IconButton
          aria-label="icon button"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          bg={useColorModeValue('gray.200', '#191919')}
          px={4}
          py={4}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
