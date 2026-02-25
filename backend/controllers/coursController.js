// controllers/CoursController.js
const Cours = require("../models/Cours");
// Ajouter un Cours (admin uniquement)
exports.ajouterCours = async (req, res) => {
  try {
    const { titre, description, contenu, niveau, categorie } = req.body;
    const nouvelCours = new Cours({
      titre,
      description,
      niveau,
      categorie,
      contenu,
      image: req.file ? req.file.filename : null,
    });
    await nouvelCours.save();
    res.status(201).json(nouvelCours);
  } catch (err) {
    res.status(400).json({ message: "Erreur d’ajout", error: err.message });
  }
};

// Récupérer tous les cours
exports.listerCours = async (req, res) => {
  try {
    const cours = await Cours.find();
    res.json(cours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
