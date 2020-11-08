module.exports = {
  plugins: [
    require('@csstools/postcss-sass')({
      includePaths: ['./node_modules']
    }),
    require('postcss-import')
  ]
};
