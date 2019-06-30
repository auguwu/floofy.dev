const { resolve } = require('path');

module.exports = {
    buildDir: resolve(__dirname, 'build'),
    mode: 'universal',
    head: {
        title: 'August (Chris)',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Web and Software Developer based in the United States' }
        ],
        link: [
            { rel: 'icon', href: '/favicon.ico' }
        ]
    },
    loading: { color: '#fff' },
    server: { port: 3000 },
    modules: ['nuxt-buefy'],
    build: {
        extend: (config, ctx) => {}
    }
}