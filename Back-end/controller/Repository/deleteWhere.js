const connection = require('../config/database');

const deleteWhere = (table, column, where) => {
    try {
        console.log("method : deleteWhere");
        const query = `UPDATE ${table} SET ${column} where ${where}`
        console.log(query)
        return query;
        // console.log("method : select, query : " + query);
    } catch (error) {
        throw error
    }
}
module.exports = deleteWhere;