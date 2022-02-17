const { knex } = require('../db/db.js');
const { deleteUser } = require('../models/user');

const deleteHuman = async (id) => {
    await knex.transaction(trx => deleteUser(trx, id) )
    return id;
}

module.exports = { deleteHuman };