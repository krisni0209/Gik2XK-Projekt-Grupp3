import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api", // ändra porten om backend körs på annan port
});

export default api;
