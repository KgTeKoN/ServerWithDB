const { Joi } = require('celebrate');
const humps = require('humps');

const createSchema = Joi.object({
    firstName: Joi.string().min(3).max(15),
    lastName: Joi.string().min(3).max(15),
})

const updateSchema = Joi.object({
    firstName: Joi.string().uppercase(),
    lastName: Joi.string().uppercase(),
})

const createUser = async (trx, data) => {
    const isValid = createSchema.validate(data);
    if (isValid.error) { throw new Error('database validation has been failed')}
    const dataSnacCase = humps.decamelizeKeys(data);
    const create = await trx.insert(dataSnacCase).into('user').returning('*');
    return humps.camelizeKeys(create[0]);
}

const readUser = async (trx, id) => {
    return await trx.from('user').where({id}).select();
}

const updateUser = async (trx, data, id) => {
    const isValid = updateSchema.validate(data)
    if (isValid.error) { throw new Error('database validation has been failed')}
    const dataSnacCase = humps.decamelizeKeys(data);
    const updateUser = await trx.update(dataSnacCase).into('user').where({id}).returning('*');
    return humps.camelizeKeys(updateUser);
}

const deleteUser = async (trx, id) => {
    return await trx.from('user').where({id}).del().returning('id');
}

module.exports = { createUser, deleteUser, readUser, updateUser }