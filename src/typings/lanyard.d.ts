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
  // Credit: https://github.com/barbarbar338/react-use-lanyard/blob/main/src/types.ts
  namespace Lanyard {
    interface Response {
      success: boolean;
      data: Data;
      error?: LanyardError;
    }

    interface LanyardError {
      message: string;
      code: string;
    }

    interface Data {
      spotify?: SpotifyData;
      listening_to_spotify: boolean;
      discord_user: User;
      discord_status: string;
      activities: Activity[];
      active_on_discord_mobile: boolean;
      active_on_discord_web: boolean;
      active_on_discord_desktop: boolean;
      kv?: Record<string, any>;
    }

    interface SpotifyData {
      track_id: string;
      timestamps: Record<'start' | 'end', number>;
      song: string;
      artist: string;
      album_art_url: string;
      album: string;
    }

    interface Activity {
      type: number;
      state: string;
      name: string;
      id: string;
      emoji?: { name: string };
      created_at: number;
      application_id?: string;
      timestamps?: Record<'start' | 'end', number>;
      session_id?: string;
      details?: string;
      buttons?: string[];
      assets?: Assets;
    }

    interface Assets {
      small_text: string;
      small_image: string;
      large_text: string;
      large_image: string;
    }

    interface User {
      username: string;
      public_flags: number;
      id: string;
      discriminator: string;
      avatar: string;
    }
  }
}
