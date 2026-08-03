import api from "../api/axios";

export const getSummary = async (fileId) => {
    const response = await api.get(`/summaries/${fileId}`);
    return response.data;
};

export const generateSummary = async (fileId) => {
    const response = await api.post(`/summaries/${fileId}`);
    return response.data;
};