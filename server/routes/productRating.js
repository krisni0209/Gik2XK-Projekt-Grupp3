// routes/productRoutes.js
router.post("/:id/ratings", async (req, res) => {
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
});
