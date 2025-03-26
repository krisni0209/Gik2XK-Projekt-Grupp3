import express from "express";
import { getAverageRating } from "../services/productService.js";

const router = express.Router();

// GET /api/products/:id/average-rating
router.get("/:id/average-rating", async (req, res) => {
  const { id } = req.params;
  try {
    const avg = await getAverageRating(id);
    if (avg === null) {
      res.status(404).json({ message: "Inga betyg hittades." });
    } else {
      res.json({ averageRating: avg });
    }
  } catch (err) {
    res.status(500).json({ error: "Något gick fel." });
  }
});

export default router;
