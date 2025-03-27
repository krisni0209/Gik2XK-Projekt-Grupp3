import { Sequelize, DataTypes } from "sequelize";
import ProductModel from "./Product.js";
import RatingModel from "./Rating.js";

const sequelize = new Sequelize({
  dialect: "sqlite", // eller mysql, beroende på vad du använder
  storage: "./database.sqlite",
});

const models = {
  Product: ProductModel(sequelize, DataTypes),
  Rating: RatingModel(sequelize, DataTypes),
};

// 🔁 Kör associationer
Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

export const { Product, Rating } = models;
export { sequelize };
export default models;
