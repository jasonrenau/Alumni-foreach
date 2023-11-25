import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5173/api/v1",
});
customFetch.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
export default customFetch;
