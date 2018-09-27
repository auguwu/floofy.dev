const express = require('express');
const app = express();
app.disable('x-powered-by');
const path = require('path');
let options = {
  PROTOCOL: 'http',
  DEV: true
};

process.seed = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (_, res) => res.render('index.ejs'))
  .get('*', (_, res) => res.redirect('/'))
  .listen(3000, () => console.log(`[Seed ${process.seed}] [Process ${process.pid}] >> ${options.PROTOCOL === 'http' ? 'http://' : "https://"}${options.dev === false ? 'augu.me' : "localhost:3000"} is now live.`));