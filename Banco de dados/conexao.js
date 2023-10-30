const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'locao200',
    database: 'escola_nuvem'
});

module.exports = pool;