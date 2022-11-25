const selectWhere = require('./Repository/selectWhere')
const connection = require('./config/database');
const insert = require('./Repository/insert');
const deleteWhere = require('./Repository/deleteWhere')
const updateWhere = require('./Repository/updateWhere')


exports.addCategorie = async(req, res) => {
    try {
        const { nom } = req.body
            // Creating queries
        connection.query(insert(`categories`, `(nomCat)`, `(?)`), [nom], (err) => {
            if (err) throw err;
            res.json({ Result: "Success" })
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getCategories = async(req, res) => {
    try {
        connection.query(selectWhere('categories', 'nomCat, idCat', `deleted = 0`), (err, results) => {
            if (err) throw err
            if (!results[0]) {
                res.json({ message: " Categories list is empty" })
            } else {
                res.json({ results })
            }
        })
    } catch (err) {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.deleteCategorie = async(req, res) => {
    try {
        const { categorieID } = req.params
        connection.query(deleteWhere('categories', 'deleted = 1', `idCat=${categorieID}`), (err, results) => {
            if (err) throw err
            res.json({ Output: results })
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}

exports.updateCategorie = async(req, res) => {
    try {
        const { name, id } = req.body
        connection.query(updateWhere('categories', `nomCat = '${name}'`, `idCat = ${id}`), (err) => {
            if (err) throw err
            res.json(`Categorie with ID: ${id} updated successfully`)
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getCategorie = async(req, res) => {
    try {
        const { categorieID } = req.params

        connection.query(selectWhere('categories', `idCat, nomCat`, `idCat = ${categorieID} and deleted = 0`), (err, results) => {
            if (err) throw err

            res.json(results)
        })
    } catch (err) {
        res.status(400)
    }
}