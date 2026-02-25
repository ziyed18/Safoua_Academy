// controllers/recommandationController.js
const recommandation = require("../models/Recommandation");
// Ajouter un recommandation (admin uniquement)
exports.ajouterrecommandation = async (req, res) => {
  try {
    const nouvelrecommandation = new recommandation(req.body);
    await nouvelrecommandation.save();
    res.status(201).json(nouvelrecommandation);
  } catch (err) {
    res.status(400).json({ message: "Erreur d’ajout", error: err.message });
  }
};
// Récupérer tous les recommandation
exports.listerrecommandation = async (req, res) => {
  try {
    const recommandation = await recommandation.find();
    res.json(recommandation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
