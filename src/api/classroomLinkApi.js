import axiosClient from "./axiosClient";

const classroomLinkAPI = {
  createClassroomLink: ({ scheduleId }, data) => {
    return axiosClient.post(`classroom-link/schedule-id/${scheduleId}`, data);
  },
  updateClassroomLinkInfo: ({ id }, data) => {
    return axiosClient.put(`classroom-link/${id}`, data);
  },
  updateClassroomLinkStatus: (id) => {
    return axiosClient.patch(`classroom-link/${id}/status`);
  },
};

export default classroomLinkAPI;
