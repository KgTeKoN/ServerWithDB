const handlers = require('../handlers/create.js');

const createHuman = async (req, res) => {
    const { firstName, lastName } = req.body;
    const result = await handlers.createHuman(firstName, lastName);
    res.send(result);
    res.end();
}

const createChildren = (req, res) => {
    const { id: parentId, firstName, lastName } = req.body;
    res.send(handlers.createChildren(parentId, firstName, lastName));
    res.end();
}

module.exports = { createHuman, createChildren };