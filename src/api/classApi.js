import axiosClient from "./axiosClient";

const classAPI = {
  getClassDetails: ({ id }) => {
    return axiosClient.get(`class/detail/${id}`);
  },
};

export default classAPI;
