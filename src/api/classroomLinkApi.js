import axiosClient from "./axiosClient";

const classroomLinkAPI = {
  createClassroomLink: ({ scheduleId }, data) => {
    return axiosClient.post(`classroom-link/schedule-id/${scheduleId}`, data);
  },
  updateClassroomLinkInfo: ({ id }, data) => {
    return axiosClient.put(`classroom-link/${id}`, data);
  },
};

export default classroomLinkAPI;
