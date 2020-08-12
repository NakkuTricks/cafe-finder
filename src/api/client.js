import axios from "axios";
import { API_ADDRESS, TOKEN } from "@/constants";

const HTTP = axios.create({
  baseURL: API_ADDRESS,
  headers: {
    Authorization: `Token ${TOKEN}`,
    "Content-Type": "multipart/form-data"
  }
});

export default HTTP;
