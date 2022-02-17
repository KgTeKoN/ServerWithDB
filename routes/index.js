const createHumans = require('./create.js');
const readHumans = require('./get.js');
const express = require("express");
const deleteHumans = require('./delete.js');
const patchHumans = require('./patch.js');

const routes = express.Router();

routes.use(createHumans);
routes.use(readHumans);
routes.use(deleteHumans);
routes.use(patchHumans);

module.exports = routes;

