/**
 * Snowpack configuration
 * @type {import('snowpack').SnowpackConfig}
 */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-vue'
  ],
  devOptions: {
    port: 3621
  }
};
