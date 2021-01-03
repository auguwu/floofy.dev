/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable camelcase */

export interface GitHubSponsorResponse {
  user_sponsors: Sponsorship;
  sponsors: Sponsorship;
}

export interface Sponsorship {
  total_count: number;
  data: Array<{
    createdAt: string;
    sponsor: Sponsor;
    tier: SponsorTier;
  }>;
}

interface Sponsor {
  following: number;
  followers: number;
  websiteUrl: string;
  avatarUrl: string;
  company: string;
  login: string;
  name: string;
  bio: string;
  url: string;
}

interface SponsorTier {
  monthlyPriceInDollars: number;
  name: string;
}
