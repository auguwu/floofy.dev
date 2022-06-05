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

import '@fontsource/cantarell/index.css';
import '@fontsource/inter/index.css';

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const DEFAULT_SANS_FONT = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
  'sans-serif'
];

const DEFAULT_SERIF_FONTS = ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'];

export default extendTheme({
  fonts: {
    heading: `Cantarell, ${DEFAULT_SERIF_FONTS.join(', ')}`,
    body: `Inter, ${DEFAULT_SANS_FONT.join(', ')}`
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.200', '#191919')(props)
      }
    })
  },

  initialColorMode: 'system',
  useSystemColorMode: true
});
