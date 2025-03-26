// src/services/ProductService.js
import api from "./api";

export const getAll = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const getById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const create = async (product) => {
  const res = await api.post("/products", product);
  return res.data;
};

export const update = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};
