/*
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

export {};
declare global {
  namespace Weather {
    interface Coordinates {
      lon: number;
      lat: number;
    }

    interface WeatherData {
      id: number;
      name: string;
      description: string;
      icon: string;
    }

    interface Main {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    }

    interface Wind {
      speed: number;
      deg: number;
    }

    interface Clouds {
      all: number;
    }

    interface Sys {
      type: number;
      id: number;
      country: 'US';
      sunrise: number;
      sunset: number;
    }

    interface Data {
      coord: Coordinates;
      weather: WeatherData[];
      base: string;
      main: Main;
      visibility: number;
      wind: Wind;
      clouds: Clouds;
      dt: number;
      sys: Sys;
      timezone: number;
      id: number;
      name: string;
      cod: number;
    }
  }
}
