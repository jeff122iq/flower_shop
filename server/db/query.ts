const Pool = require('pg').Pool,
    config = require("config"),
    db = config.get("postgres")

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port,
})

module.exports = pool;