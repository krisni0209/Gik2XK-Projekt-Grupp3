import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;

import configData from "../config.js";
import createProductModel from "./product.js";
import createUserModel from "./user.js";

const config = configData.development;

const sequelize = new Sequelize(config);

const Product = createProductModel(sequelize, DataTypes);
const User = createUserModel(sequelize, DataTypes);

export { sequelize, Product, User };
