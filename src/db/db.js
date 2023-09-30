
import db from 'mysql'
const mysql = db();

const connection = async () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD
      });
      
      connection.connect();
      
      connection.query('SELECT * FROM clients', function(err, results, fields) {
        if (err) throw err;
        console.log(`The search result is ${results}`);
      });
      
      connection.end();
      
}