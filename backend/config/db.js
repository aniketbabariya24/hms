const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  // connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '232410',
  database: 'sakila',
  port: 3306,
  // authPlugin: '232410',
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }

  console.log('Connected to MySQL database');

  // Release the connection when done
  connection.release();
});

module.exports = { pool };
