const validateCreateHumans = (req, res, next) => {
    const {firstName, lastName} = req.body;
    if (!firstName || !lastName) {
        res.status(422);
        res.send(JSON.stringify('Incorrect data'))
        res.end();
        return;
    }
    next();
}

const validateCreateChildren = (req, res, next) => {
    const {id, firstName, lastName} = req.body;
    if (!id || !firstName || !lastName) {
        res.status(422);
        res.send(JSON.stringify('Incorrect data'))
        res.end();
        return;
    }
    next();
}

module.exports = { validateCreateHumans, validateCreateChildren }