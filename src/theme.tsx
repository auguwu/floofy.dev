/**
 * Copyright (c) 2018-2021 Noel
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

import { theme as _theme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const theme: Record<string, any> = {
  config: {
    useSystemColorMode: true,
    initialThemeColor: 'dark',
  },

  fonts: {
    ..._theme.fonts,
    body: 'Ubuntu',
  },

  breakpoints: createBreakpoints({
    sm: '640px',
    md: '750px',
    lg: '1024px',
    xl: '1150px',
    '2xl': '1280px',
  }),

  colors: {
    background: '#1A1423',
    discord: '#7289DA', // old colour > new colour - discord sue me (dont please)
    twitter: '#1DA1F2',
    github: '#333333',
    telegram: '#0088CC',
  },
};

const overriden = extendTheme(theme);
export default overriden;
