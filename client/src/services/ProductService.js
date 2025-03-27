import { Product, Rating } from "../models/index.js";

// Hämta alla produkter (inkl. betyg)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model: Rating, as: "ratings" },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Fel vid hämtning av produkter." });
  }
};

// Hämta en specifik produkt (inkl. betyg)
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: { model: Rating, as: "ratings" },
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Produkten hittades inte." });
    }
  } catch (err) {
    res.status(500).json({ error: "Fel vid hämtning av produkt." });
  }
};

// Skapa ny produkt
export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Fel vid skapande av produkt." });
  }
};

// Uppdatera produkt
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produkten hittades inte." });
    }
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: "Fel vid uppdatering av produkt." });
  }
};

// Ta bort produkt
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produkten hittades inte." });
    }
    await product.destroy();
    res.json({ message: "Produkten har tagits bort." });
  } catch (err) {
    res.status(500).json({ error: "Fel vid borttagning av produkt." });
  }
};

// Lägg till betyg på produkt
export const addRatingToProduct = async (req, res) => {
  const { id } = req.params;
  const { value, comment } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Produkt hittades inte." });
    }

    const newRating = await Rating.create({
      value,
      comment,
      productId: id,
    });

    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ error: "Fel vid skapande av betyg." });
  }
};

// Hämta snittbetyg
export const getAverageRating = async (productId) => {
  const ratings = await Rating.findAll({ where: { productId } });
  if (ratings.length === 0) return null;

  const sum = ratings.reduce((acc, r) => acc + r.value, 0);
  const avg = sum / ratings.length;
  return parseFloat(avg.toFixed(1));
};
