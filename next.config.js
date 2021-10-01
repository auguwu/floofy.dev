module.exports = {
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  trailingSlash: true,
  webpack5: true,
  images: {
    domains: ['cdn.floofy.dev'],
  },
  eslint: {
    // It is already linting in workflow, so this isn't needed
    ignoreDuringBuilds: true,
  },
};
