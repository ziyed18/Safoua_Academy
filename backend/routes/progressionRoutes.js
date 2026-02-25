///// routes/progressionRoutes.js
const express = require("express");
const router = express.Router();
const progressionController = require("../controllers/progressionController");
router.post("/ajouter", progressionController.ajouterprogression);
router.get("/", progressionController.listerprogression);
module.exports = router;
