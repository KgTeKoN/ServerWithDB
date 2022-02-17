const { knex } = require('../db/db.js');
const { updateUser: patchUser } = require('../models/user');

const handlersPatchHuman = async (firstName, lastName, id) => {
    const result = await knex.transaction(trx => {
        return patchUser(trx, { firstName, lastName }, id)
    })
    return result;
}

const handlersPatchChildren = (parentId, firstName, lastName) => {
    if (db[parentId].children) {
        db[parentId].children.push({firstName, lastName});
    } else {
        db[parentId].children = [{firstName, lastName}];
    }

    return JSON.stringify(db)
}

module.exports = { handlersPatchHuman, handlersPatchChildren };