const { readFileSync } = require('fs');
const { safeLoad } = require('js-yaml');
const express = require('express');
const path = require('path');

const config = safeLoad(readFileSync('./application.yml', 'utf8'));
const main = require('./routes/main');
const app = express();

app
    .use('/', main)
    .use(express.static(path.join(__dirname, 'static')))
    .listen(config.port, () => console.log(`Listening on port ${config.port}`));