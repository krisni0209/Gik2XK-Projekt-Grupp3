// server/models/index.js
import { Sequelize, DataTypes } from "sequelize";
import ProductModel from "./Product.js";
import RatingModel from "./Rating.js";

// Initiera Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // eller t.ex. process.env.DATABASE_URL om du använder .env och MySQL
});

// Initiera modeller
const Product = ProductModel(sequelize, DataTypes);
const Rating = RatingModel(sequelize, DataTypes);

// Associera modeller
Product.associate?.({ Rating });
Rating.associate?.({ Product });

// Exportera både named och default
export { sequelize, Sequelize, Product, Rating }; // ✅ Gör att du kan importera enskilt t.ex. { sequelize }
export default {
  sequelize,
  Sequelize,
  Product,
  Rating,
};
