const Kirbe  = require('kirbe');
const path   = require('path');

const app   = new Kirbe.Server();

app.use(Kirbe.static(path.join(__dirname, 'static')));
app.listen(1337, console.log('Listening on port 1337'));