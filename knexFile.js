const { dbHost, dbPassword, dbName, dbUser, poolMin, poolMax, dbDebug } = require('./config');

module.exports = {
    client: 'pg',
    connection: `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
    pool: {
        min: poolMin,
        max: poolMax,
    },
    debug: dbDebug,
};
