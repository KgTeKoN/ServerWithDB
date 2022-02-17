const validateDeleteHumans = (req, res, next) => {
    const { id } = req.query;
    if ( !id ) {
        res.send(JSON.stringify('Database not includes this ID'))
        res.end();
        return;
    }
    next();
}

module.exports = { validateDeleteHumans }