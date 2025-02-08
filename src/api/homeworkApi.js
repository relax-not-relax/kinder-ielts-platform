import axiosClient from "./axiosClient";

const homeworkAPI = {
  createHomeworkLink: ({ scheduleId }, data) => {
    return axiosClient.post(`homework/schedule-id/${scheduleId}`, data);
  },
  updateHomeworkLink: ({ id }, data) => {
    return axiosClient.put(`homework/${id}`, data);
  },
};

export default homeworkAPI;
