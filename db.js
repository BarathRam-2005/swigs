const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'food_order',
  password: '1034',
  port: 5432,
});

module.exports = pool;


