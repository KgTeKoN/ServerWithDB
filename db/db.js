const knex = require('knex');
const knexFile = require('../knexFile');

module.exports = {
    knex: knex(knexFile),
}