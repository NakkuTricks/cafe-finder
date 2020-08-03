import axios from "axios";
import { API_ADDRESS } from "@/constants";

const HTTP = axios.create({
  baseURL: API_ADDRESS
});

export default HTTP;
