// models/progression.js
const mongoose = require("mongoose");

const progressionSchema = new mongoose.Schema(
  {
    pourcentage: Number, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Progression", progressionSchema);


