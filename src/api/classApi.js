import axiosClient from "./axiosClient";

const classAPI = {
  getClassDetails: ({ id }) => {
    return axiosClient.get(`class/detail/${id}`);
  },
  getStudyScheduleById: (id) => {
    return axiosClient.get(`study-schedule/info/${id}`);
  },
  updateStudyScheduleById: ({ studyScheduleId }, data) => {
    return axiosClient.put(`study-schedule/${studyScheduleId}`, data);
  },
};

export default classAPI;
