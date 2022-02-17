const express = require('express');

const routes = express.Router();
const { createHuman, createChildren } = require('../controllers/create');

const validator = require('../validators/create.js');

routes.post( '/humans', validator.validateCreateHumans, createHuman);

routes.post( '/children', validator.validateCreateChildren, createChildren)

module.exports = routes;