const mysql = require('mysql');
/**
 * Creamos el pool de conexiones a la base de datos
 */
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admon',
    database: 'cyatv'
   });

   exports.pool = pool;

