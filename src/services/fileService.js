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

export async function searchFiles(keyword){
    const response = await api.get(
        `/files/search?keyword=${encodeURIComponent(keyword)}`
    );

    return response.data;
}

export async function sortFiles(by) {
    const response = await api.get(`/files/sort?by=${by}`);
    return response.data;
}