const connection = require('../config/database');

const insertWhere = (table, column = "*", dataToAdd, where) => {
    try {
        console.log("method : insert");
        const query = `INSERT INTO ${table} ${column} VALUES ${dataToAdd} where ${where}`;
        return query;
        console.log("method : insert, query : " + query);
        // return connection.query(query)
    } catch (error) {
        throw error
    }
}

module.exports = insertWhere;