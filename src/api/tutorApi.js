import axiosClient from "./axiosClient";

const tutorAPI = {
  getAll: () => {
    return axiosClient.get("tutor/all?includeExtendDetails=true");
  },
};

export default tutorAPI;
