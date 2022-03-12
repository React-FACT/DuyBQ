const mysql = require('mysql8');
const createConnection = (host, port, db, user, psw) => {
    const connection = mysql.createConnection({
        host: String(host),
        database: String(db),
        port: Number(port),
        user: String(user),
        password: String(psw),
    });

    connection.connect((error) => {
        if (error) throw error;
        console.log('Successfully connected to the database.');
    });
};
module.exports = { createConnection };