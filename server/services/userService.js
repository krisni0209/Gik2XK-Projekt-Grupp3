const { User } = require("../models");

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function createUser(data) {
  return await User.create(data);
}

async function deleteUser(id) {
  return await User.destroy({ where: { id } });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};
