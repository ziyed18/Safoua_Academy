// models/lecon.js 
const mongoose = require("mongoose"); 
const leconSchema = new mongoose.Schema({ 
titre: String, 
contenu: String, 
}, { timestamps: true }); 
module.exports = mongoose.model("lecon", leconSchema); 


