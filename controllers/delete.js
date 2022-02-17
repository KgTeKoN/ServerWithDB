const handlers = require('../handlers/delete.js');

const controllerDeleteHuman = async (req, res) => {
    const { id } = req.query;
    const result = await handlers.deleteHuman(id);
    res.send(result);
    res.end();
}

module.exports = { controllerDeleteHuman };