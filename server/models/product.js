export default (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
  });

  Product.associate = (models) => {
    Product.hasMany(models.Rating, { as: "ratings" });
  };

  return Product;
};
