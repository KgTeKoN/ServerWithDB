const express = require('express');

const routes = express.Router();

const { validateDeleteHumans } = require('../validators/delete.js');
const { controllerDeleteHuman: getHuman } = require('../controllers/delete');

routes.delete( '/humans', validateDeleteHumans, getHuman);

module.exports = routes;