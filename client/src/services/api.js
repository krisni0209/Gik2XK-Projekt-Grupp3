import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api", // Anpassa port vid behov
});

export default api;
