const express = require('express');
const bodyParser = require('body-parser')

const { port } = require('./config.js');

const app = express();
const routes = require('./routes/index.js');
app.use(bodyParser.json());
app.use(routes);

app.listen(port);