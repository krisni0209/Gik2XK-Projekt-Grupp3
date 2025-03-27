import { Product, Rating } from "../models/index.js";

// Hämta alla produkter
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

// Hämta en produkt
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: { model: Rating, as: "ratings" },
    });
    product
      ? res.json(product)
      : res.status(404).json({ message: "Produkten hittades inte." });
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
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Produkten hittades inte." });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: "Fel vid uppdatering av produkt." });
  }
};

// Radera produkt
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Produkten hittades inte." });

    await product.destroy();
    res.json({ message: "Produkten har tagits bort." });
  } catch (err) {
    res.status(500).json({ error: "Fel vid borttagning av produkt." });
  }
};

// Snittbetyg
export const getAverageRating = async (productId) => {
  const ratings = await Rating.findAll({ where: { productId } });
  if (ratings.length === 0) return null;

  const sum = ratings.reduce((acc, r) => acc + r.value, 0);
  return parseFloat((sum / ratings.length).toFixed(1));
};

// Lägg till betyg
export const addRatingToProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produkt hittades inte" });

    const rating = await Rating.create({
      value: req.body.value,
      comment: req.body.comment,
      productId: product.id,
    });

    res.status(201).json(rating);
  } catch (err) {
    res.status(500).json({ error: "Fel vid skapande av betyg" });
  }
};
