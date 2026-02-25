// controllers/progressionController.js
const progression = require("../models/Progression");
// Ajouter un progression (admin uniquement)
exports.ajouterprogression = async (req, res) => {
  try {
    const nouvelprogression = new progression(req.body);
    await nouvelprogression.save();
    res.status(201).json(nouvelprogression);
  } catch (err) {
    res.status(400).json({ message: "Erreur d’ajout", error: err.message });
  }
};
// Récupérer tous les progression
exports.listerprogression = async (req, res) => {
  try {
    const progression = await progression.find();
    res.json(progression);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
