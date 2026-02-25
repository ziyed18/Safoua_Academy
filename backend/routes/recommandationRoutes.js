///// routes/recommandationRoutes.js
const express = require("express");
const router = express.Router();
const recommandationController = require("../controllers/recommandationController");
router.post("/ajouter", recommandationController.ajouterrecommandation);
router.get("/", recommandationController.listerrecommandation);
module.exports = router;
