import axiosClient from "./axiosClient";

const classAPI = {
  getClassDetails: ({ id }) => {
    return axiosClient.get(`class/detail/${id}`);
  },
  createClassroomLink: ({ scheduleId }, data) => {
    return axiosClient.post(`classroom-link/schedule-id/${scheduleId}`, data);
  },
  createWarmUpTestLink: ({ scheduleId }, data) => {
    return axiosClient.post(`warmup-test/schedule-id/${scheduleId}`, data);
  },
  createHomeworkLink: ({ scheduleId }, data) => {
    return axiosClient.post(`homework/schedule-id/${scheduleId}`, data);
  },
  getStudyScheduleById: (id) => {
    return axiosClient.get(`study-schedule/info/${id}`);
  },
};

export default classAPI;
