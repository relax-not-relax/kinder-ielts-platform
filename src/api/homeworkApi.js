import axiosClient from "./axiosClient";

const homeworkAPI = {
  createHomeworkLink: ({ scheduleId }, data) => {
    return axiosClient.post(`homework/schedule-id/${scheduleId}`, data);
  },
  updateHomeworkLink: ({ id }, data) => {
    return axiosClient.put(`homework/${id}`, data);
  },
  updateHomeworkStatus: (id) => {
    return axiosClient.patch(`homework/${id}/view-status`);
  },
};

export default homeworkAPI;
