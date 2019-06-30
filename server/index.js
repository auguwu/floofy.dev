const { Nuxt, Builder } = require('nuxt');
const consola = require('consola');
const app = require('express')();

let config = require('../nuxt.config');
config.dev = !(process.env.NODE_ENV === 'production');

const start = async() => {
    const nuxt = new Nuxt(config);
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    app.use(nuxt.render);
    app.listen(nuxt.options.server.port, () => consola.ready({
        message: `Server is now listening on https://${nuxt.options.server.host}:${nuxt.options.server.port}`,
        badge: true
    }));
};
start();