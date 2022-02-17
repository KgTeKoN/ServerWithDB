const { handlersPatchHuman, handlersPatchChildren } = require('../handlers/patch.js');

const patchHuman = async (req, res) => {
    const { id, firstName, lastName } = req.body;
    const result = await handlersPatchHuman(firstName, lastName, id);
    res.send(result);
    res.end();
}

const patchChildren = (req, res) => {
    const { id: parentId, firstName, lastName } = req.body;
    res.send(handlersPatchChildren(parentId, firstName, lastName));
    res.end();
}

module.exports = { patchHuman, patchChildren };