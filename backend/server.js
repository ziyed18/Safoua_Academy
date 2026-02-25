// server.js 
const express = require("express"); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const connectDB = require("./config/db");
dotenv.config(); 
const app = express(); 
const  path = require("path");

// Middleware 
app.use(cors()); 
app.use(express.json()); 
// Connexion BDD 
connectDB(); 
// Static folder for images
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));
// Routes 
app.use("/api/users", require("./routes/userRoutes")); 
app.use("/api/cours", require("./routes/courRoutes")); 
app.use("/api/lecon", require("./routes/leconRoutes")); 
app.use("/api/progression", require("./routes/progressionRoutes")); 
app.use("/api/auth", require("./routes/authRoutes")); 
app.use("/api/recommandation", require("./routes/recommandationRoutes")); 
/* Middlewares globaux */
app.use(express.json()); // lire le body JSON
app.use(cors());         // autoriser les requêtes externes

app.use("/api/auth", require("./routes/authRoutes"));

// Lancer le serveur 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
console.log(`🚀Serveur lancé sur http://localhost:${PORT}`); 
});