import api from "./api";

// Hämta alla produkter
export const getAll = async () => {
  const res = await api.get("/products");
  return res.data;
};

// Hämta en produkt
export const getById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

// Skapa ny produkt
export const create = async (product) => {
  const res = await api.post("/products", product);
  return res.data;
};

// Uppdatera produkt
export const update = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

// Ta bort produkt
export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

// Lägg till betyg
export const addRating = async (productId, ratingData) => {
  const res = await api.post(`/products/${productId}/ratings`, ratingData);
  return res.data;
};

// Hämta snittbetyg
export const getAverageRating = async (productId) => {
  const res = await api.get(`/products/${productId}/average-rating`);
  return res.data;
};
