///// routes/coursRoutes.js
const express = require("express");
const router = express.Router();
const coursController = require("../controllers/coursController");
const upload = require("../middleware/upload");
router.post("/ajouter", upload.single("image"), coursController.ajouterCours);
router.get("/", coursController.listerCours);
module.exports = router;
