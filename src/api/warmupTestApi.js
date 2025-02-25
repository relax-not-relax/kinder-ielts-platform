import axiosClient from "./axiosClient";

const warmupTestAPI = {
  createWarmUpTestLink: ({ scheduleId }, data) => {
    return axiosClient.post(`warmup-test/schedule-id/${scheduleId}`, data);
  },
  updateWarmUpTestLink: ({ id }, data) => {
    return axiosClient.put(`warmup-test/${id}`, data);
  },
  updateWarmUpTestStatus: (id) => {
    return axiosClient.patch(`warmup-test/${id}/view-status`);
  },
};

export default warmupTestAPI;
