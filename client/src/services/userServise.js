import api from "./api";

const UserService = {
  getAll: async () => {
    const res = await api.get("/users");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },

  create: async (user) => {
    const res = await api.post("/users", user);
    return res.data;
  },

  update: async (id, user) => {
    const res = await api.put(`/users/${id}`, user);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  },
};

export default UserService;
