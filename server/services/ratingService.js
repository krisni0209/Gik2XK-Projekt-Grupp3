const { Rating } = require("../models");

async function addRating(productId, amount) {
  return await Rating.create({
    product_id: productId,
    rating: amount,
  });
}

async function getRatingsForProduct(productId) {
  return await Rating.findAll({ where: { product_id: productId } });
}

async function getAverageRating(productId) {
  const ratings = await getRatingsForProduct(productId);
  if (ratings.length === 0) return 0;

  const total = ratings.reduce((sum, r) => sum + r.rating, 0);
  return total / ratings.length;
}

module.exports = {
  addRating,
  getRatingsForProduct,
  getAverageRating,
};
