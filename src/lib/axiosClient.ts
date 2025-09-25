import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  withCredentials: false,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  paramsSerializer: {
    encode: (params) =>
      queryString.stringify(params, { arrayFormat: "bracket" }),
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const newConfig = { ...config };
 
  return newConfig;
});

export default axiosClient;