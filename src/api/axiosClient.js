import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://150.95.109.50:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTczNTYzMDM5MCwiZXhwIjoxNzM2MjM1MTkwfQ.KC-MuU2nwIJ5j2YUDWSDgF9E0EHYQVoe-c6-L_BUmo4";
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
