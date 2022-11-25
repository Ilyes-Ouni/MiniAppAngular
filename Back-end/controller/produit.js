const selectWhere = require('./Repository/selectWhere')
const connection = require('./config/database');
const insert = require('./Repository/insert');
const deleteWhere = require('./Repository/deleteWhere')
const updateWhere = require('./Repository/updateWhere')


exports.addProduit = async(req, res) => {
    try {
        const { idCat } = req.params
        const { nomProduit, prixProduit } = req.body
        console.log(req.body)
            // Creating queries
        connection.query(insert(`products`, `(nomProduit, prixProduit, dateCreation, categorie)`, `(?, ?, ?, ?)`), [nomProduit, prixProduit, (new Date()).toISOString().split('T')[0], Number(idCat)], (err) => {
            if (err) throw err;
            res.json({ Result: "Success" })
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getProduits = async(req, res) => {
    try {
        connection.query(selectWhere('products, categories', '*', `products.deleted = 0 and products.categorie = categories.idCat`), (err, results) => {
            if (err) throw err
            if (!results[0]) {
                res.status(400).json({ message: " product list is empty" })
            } else {
                res.json({ Output: results })
            }
        })
    } catch (err) {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.deleteProduit = async(req, res) => {
    try {
        const { produitID } = req.params
        console.log(produitID)
        connection.query(deleteWhere('products', 'deleted = 1', `idProduit=${produitID}`), (err, results) => {
            if (err) throw err
            res.json({ Output: results })
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}

exports.updateProduit = async(req, res) => {
    try {
        const { nomProduit, prixProduit, dateCreation, categorie, idProduit } = req.body

        console.log(req.body)
        connection.query(updateWhere('products', `nomProduit = '${nomProduit}',prixProduit = ${prixProduit}, dateCreation = '${dateCreation}', categorie = '${categorie}' `, `idProduit = ${idProduit}`), (err) => {
            if (err) throw err
            res.json(`Produit with ID: ${idProduit} updated successfully`)
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getProduit = async(req, res) => {
    try {
        const { produitID } = req.params

        connection.query(selectWhere('products, categories', `idProduit, nomProduit, prixProduit, dateCreation, categorie, idCat, nomCat`, `idProduit = ${produitID} and products.deleted = 0`), (err, results) => {
            if (err) throw err

            res.json(results)
        })
    } catch (err) {
        res.status(400)
    }
}