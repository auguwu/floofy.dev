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

/* eslint-disable camelcase */

import { useState, useEffect } from 'react';
import {} from '@chakra-ui/react';
import * as luxon from 'luxon';

interface Sponsor {
  joined_at: string;
  tier: SponsorTier;
  tier_selected_at: string | null;
  followers: number;
  following: number;
  status: SponsorStatus;
  website_url: string;
  twitter_handle: string | null;
  has_sponsors_listing: boolean;
  avatar_url: string;
  company: string;
  login: string;
  name: string | null;
  bio: string;
}

interface SponsorTier {
  custom_amount: boolean;
  created_at: string;
  name: string;
}

interface SponsorStatus {
  emoji: string;
  message: string;
  expires_at: string | null;
}

export default function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  useEffect(() => {
    fetch('https://api.floofy.dev/sponsors/auguwu')
      .then((res) => res.json())
      .then((data) => setSponsors(data.sponsors.data));
  }, []);

  return <></>;
}
