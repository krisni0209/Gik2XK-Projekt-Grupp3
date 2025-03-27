export default (sequelize, DataTypes) => {
  const Rating = sequelize.define("Rating", {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: DataTypes.TEXT,
  });

  Rating.associate = (models) => {
    Rating.belongsTo(models.Product, { foreignKey: "productId" });
  };

  return Rating;
};
