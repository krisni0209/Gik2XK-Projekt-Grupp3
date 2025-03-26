module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100], // Minst 2 och max 100 tecken
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          isFloat: { msg: "Price must be a number" },
          min: { args: [0], msg: "Price must be at least 0" },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: "Invalid URL format" },
        },
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
          isFloat: { msg: "Rating must be a number" },
          min: { args: [0], msg: "Rating must be at least 0" },
          max: { args: [5], msg: "Rating cannot exceed 5" },
        },
      },
    },
    {
      tableName: "products", // Anger tabellnamn explicit
      underscored: true,
      timestamps: false, // Sätt till true om du vill ha createdAt och updatedAt
    }
  );
};
