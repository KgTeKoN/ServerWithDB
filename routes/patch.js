const express = require('express');

const routes = express.Router();
const { patchHuman, patchChildren } = require('../controllers/patch');

const { validatePatchHumans } = require('../validators/patch.js');

routes.patch( '/humans', validatePatchHumans, patchHuman);

module.exports = routes;