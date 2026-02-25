// models/cours.js 
const mongoose = require("mongoose"); 
const coursSchema = new mongoose.Schema({ 
titre: String, 
description: String,
categorie: String,
niveau: String,
contenu: String, 
image: String,

}, { timestamps: true }); 
module.exports = mongoose.model("Cours", coursSchema); 


