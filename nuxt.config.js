const { resolve } = require('path');

module.exports = {
    buildDir: resolve(__dirname, 'build'),
    mode: 'universal',
    head: {
        title: 'August (Chris)',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Website of the Yamashiro discord bot' }
        ],
        link: [
            { rel: 'icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico&display=swap' }
        ]
    },
    loading: { color: '#fff' },
    server: { port: 3000 },
    modules: ['nuxt-buefy'],
    build: {
        extend: (config, ctx) => {}
    }
}