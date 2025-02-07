import axiosClient from "./axiosClient";

const authenticationAPI = {
  login: (data) => {
    return axiosClient.post("auth/login", data);
  },
};

export default authenticationAPI;
