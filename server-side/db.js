const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Jo5115621",
    host: "localhost",
    port: 5432,
    database: "storesuppliers"
});

module.exports = pool;

