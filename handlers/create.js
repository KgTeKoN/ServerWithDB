const { knex } = require('../db/db.js');
const { createUser } = require('../models/user');

const createHuman = async (firstName, lastName) => {
    const result = await knex.transaction(trx => {
        return createUser(trx, { firstName, lastName })
    })
    return result;
}

const createChildren = (parentId, firstName, lastName) => {
    if (db[parentId].children) {
        db[parentId].children.push({firstName, lastName});
    } else {
        db[parentId].children = [{firstName, lastName}];
    }

    return JSON.stringify(db)
}

module.exports = { createHuman, createChildren };