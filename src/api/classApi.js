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
  updateStudyScheduleStatus: (id) => {
    return axiosClient.patch(`study-schedule/${id}/view-status`);
  },
};

export default classAPI;
