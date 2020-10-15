export interface GitHubSponsorResponse {
  statusCode: number;
  data: Sponsorship[];
}

export interface Sponsorship {
  createdAt: string;
  sponsor: Sponsor;
  tier: SponsorTier;
}

interface Sponsor {
  profile: string;
  avatar: string;
  login: string;
  name: string;
  bio: string;
}

interface SponsorTier {
  monthlyPriceInCents: number;
  name: string;
}
