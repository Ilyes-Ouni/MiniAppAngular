const connection = require('../config/database');

// Inseet Methods:

const insert = (table, column, dataToAdd) => {
    try {
        console.log("method : insert");
        const query = `INSERT INTO ${table} ${column} VALUES ${dataToAdd}`;
        console.log(query);
        return query;
        // return connection.query(query)
    } catch (error) {
        throw error
    }
}

module.exports = insert;