import axios from "axios";
import Cookies from "js-cookie";
import { KEY } from "../constants";

const isEmptyBaseURL = import.meta.env.VITE_BASE_URL?.replaceAll("/", "") ?? ""

const axiosClient = axios.create({
  baseURL: isEmptyBaseURL ? import.meta.env.VITE_BASE_URL : "https://kinder-ielts.click/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const altToken = Cookies.get(KEY.ACCESS_TOKEN);
    const token = Cookies.get(KEY.REFRESH_TOKEN);

    if (config.useAltToken && altToken) {
      config.headers.Authorization = `Bearer ${altToken}`;
    } else if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor cho response
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Xử lý lỗi, ví dụ nếu token hết hạn
    if (error.response && error.response.status === 401) {
      // Xử lý logout hoặc làm mới token
      console.log("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
