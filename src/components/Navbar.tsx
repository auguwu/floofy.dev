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
import type { FC } from 'react';

export const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

export const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

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
      backgroundColor: useColorModeValue('gray.300', '#232323')
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
        gap={{
          base: '4',
          lg: '12'
        }}
      >
        <NavLink href="/">Home</NavLink>

        <NavLink href="https://twitter.com/auguuwu">Twitter</NavLink>

        <NavLink href="https://github.com/auguwu">GitHub</NavLink>

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
