const connection = require('../config/database');

const selectWhere = (table, column, where) => {
    try {
        console.log("method : selectWhere");
        const query = `select ${column} from ${table} where ${where}`
        console.log(query)
        return query;
        // console.log("method : select, query : " + query);
        // return connection.query(query)
    } catch (error) {
        console.log("error :", error);
        throw error
    }
}

module.exports = selectWhere;