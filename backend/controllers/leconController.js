// controllers/leconController.js
const lecon = require("../models/Lecon");
// Ajouter un lecon (admin uniquement)
exports.ajouterlecon = async (req, res) => {
  try {
    const nouvellecon = new lecon(req.body);
    await nouvellecon.save();
    res.status(201).json(nouvellecon);
  } catch (err) {
    res.status(400).json({ message: "Erreur d’ajout", error: err.message });
  }
};
// Récupérer tous les lecon
exports.listerlecon = async (req, res) => {
  try {
    const lecon = await lecon.find();
    res.json(lecon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
