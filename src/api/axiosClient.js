import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: "https://kinder-ielts.click/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const altToken = Cookies.get("refreshTokenKinderWeb");
    const token = Cookies.get("accessTokenKinderWeb");

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
