import axios from "axios";
import { API_ADDRESS } from "@/constants";
import store from "@/store/store";

const HTTP = axios.create({
  baseURL: API_ADDRESS,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

axios.interceptors.request.use(function(config) {
  const isAuthenticated = store.getters.isAuthenticated;
  if (isAuthenticated) {
    config.headers["Authorization"] = `Token ${isAuthenticated}`;
  }
  return config;
});

export default HTTP;
