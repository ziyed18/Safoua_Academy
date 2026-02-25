// models/recommandation.js 
const mongoose = require("mongoose"); 
const recommandationSchema = new mongoose.Schema({ 

}, { timestamps: true }); 
module.exports = mongoose.model("recommandation", recommandationSchema); 


