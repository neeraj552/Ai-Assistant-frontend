import api from "../api/axios"

export const uploadFile = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post("/files/upload", formData);

    return response.data;
};

export const getFiles = async () => {

    const response = await api.get("/files");
    return response.data;
};

export const deleteFile = async (id) => {
    return api.delete(`/files/${id}`);
};

export const downloadFile = async (id) => {
    return api.get(`/files/download/${id}`, {
        responseType: "blob",
    });
};