import api from "./api";

// Hämta alla användare
const getAll = async () => {
  const res = await api.get("/users");
  return res.data;
};

// Hämta användare med ID
const getById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// Skapa användare
const create = async (user) => {
  const res = await api.post("/users", user);
  return res.data;
};

// Uppdatera användare
const update = async (id, user) => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
};

// Ta bort användare
const remove = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  delete: remove,
};
