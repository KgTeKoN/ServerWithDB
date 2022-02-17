const { knex } = require('../db/db.js');
const { readUser: getUser } = require('../models/user');

const getHuman = async (id) => {
    return await knex.transaction(trx => getUser(trx, id) );
}

module.exports = { getHuman };