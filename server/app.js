import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { sequelize } from "./models/index.js";

dotenv.config();

const app = express(); // ← ← ← VIKTIG RAD!

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Webshop API är igång 🚀");
});

sequelize.sync(); // Lägg till { force: true } vid behov

export default app;
