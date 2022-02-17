const express = require('express');

const routes = express.Router();

const { validateGetHumans } = require('../validators/get.js');
const { controllerGetHuman: getHuman } = require('../controllers/get');

routes.get( '/humans', validateGetHumans, getHuman);


module.exports = routes;