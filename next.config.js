module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  future: {
    webpack5: true
  },
  images: {
    domains: ['cdn.floofy.dev']
  },

  redirects: async() => [
    {
      destination: 'https://twitter.com/auguuwu',
      permanent: true,
      source: '/twitter'
    },
    {
      destination: 'https://discord.gg/JjHGR6vhcG',
      permanent: true,
      source: '/discord',
    }
  ]
};
