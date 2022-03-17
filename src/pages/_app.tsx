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

import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import theme from '../theme';

export default function PawApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex direction="column" alignItems="center" mt="1.6em">
        <Box h="10%" w="85%" pt={{ base: 4, lg: 0 }}>
          <Navbar />
        </Box>
      </Flex>

      <Flex direction="row" px={[4, 6, 8]} py={[2, 4, 6]}>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}
