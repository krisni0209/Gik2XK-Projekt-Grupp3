import { Sequelize, DataTypes } from "sequelize";
import ProductModel from "./Product.js";
import RatingModel from "./Rating.js";
import UserModel from "./User.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // Eller använd .env för MySQL
});

const Product = ProductModel(sequelize, DataTypes);
const Rating = RatingModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

Product.associate?.({ Rating });
Rating.associate?.({ Product });

export { sequelize, Sequelize, Product, Rating, User };
export default { sequelize, Sequelize, Product, Rating, User };
