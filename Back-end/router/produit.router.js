const router = require("express").Router();
let userController = require("../controller/produit");

router.post("/addProduit/:idCat", userController.addProduit);
router.get("/getProduits", userController.getProduits);
router.get("/deleteProduit/:produitID", userController.deleteProduit);
router.put("/updateProduit", userController.updateProduit);
router.get("/getProduit/:produitID", userController.getProduit);

module.exports = router;