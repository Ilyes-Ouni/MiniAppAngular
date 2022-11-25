const connection = require('../config/database');

// Select Methods
const select = (table, column = "*") => {
    try {
        console.log("method : select");
        const query = `select ${column} from ${table}`
        return query;
        console.log("method : select, query : " + query);
        // return connection.query(query)
    } catch (error) {
        throw error
    }
}



module.exports = select;