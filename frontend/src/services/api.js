import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-kathir.onrender.com/api",
});

export default API;