const { getHuman } = require('../handlers/get.js');

const controllerGetHuman = async (req, res) => {
    const { id } = req.query;
    const result = await getHuman(id);
    res.send(result);
    res.end();
}

module.exports = { controllerGetHuman };