const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'letterboxtdb',
    password: '',
    port: 5432,
});