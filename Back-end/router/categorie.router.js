const router = require("express").Router();
let userController = require("../controller/categorie");

router.post("/addCategorie", userController.addCategorie);
router.get("/getCategories", userController.getCategories);
router.put("/deleteCategorie/:categorieID", userController.deleteCategorie);
router.put("/updateCategorie", userController.updateCategorie);
router.get("/getCategorie/:categorieID", userController.getCategorie);

module.exports = router;