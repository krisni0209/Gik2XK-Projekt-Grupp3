export default {
  development: {
    dialect: "sqlite",
    storage: "./database.sqlite", // eller byt till mysql config
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
