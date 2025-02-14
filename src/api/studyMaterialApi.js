import axiosClient from "./axiosClient";

const studyMaterialAPI = {
  createStudyMaterial: ({ scheduleId }, data) => {
    return axiosClient.post(`/study-material/schedule-id/${scheduleId}`, data);
  },
  updateStudyMaterial: ({ id }, data) => {
    return axiosClient.put(`/study-material/${id}`, data);
  },
  updateMaterialLink: ({ materialLinkId }, data) => {
    return axiosClient.put(`material-links/${materialLinkId}`, data);
  },
  getStudyMaterials: (id) => {
    return axiosClient.get(`study-material/info/${id}`);
  },
};

export default studyMaterialAPI;
