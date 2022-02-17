const validatePatchHumans = (req, res, next) => {
    const { id } = req.body;
    if ( !id ) {
        res.send(JSON.stringify('Database not includes this ID'))
        res.end();
        return;
    }
    next();
}

module.exports = { validatePatchHumans }