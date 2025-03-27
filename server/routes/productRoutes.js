import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAverageRating,
} from "../services/productService.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

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
