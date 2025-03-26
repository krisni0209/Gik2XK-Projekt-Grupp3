export default (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    price: { type: DataTypes.DOUBLE, allowNull: false },
    imageUrl: DataTypes.STRING,
  });
};
