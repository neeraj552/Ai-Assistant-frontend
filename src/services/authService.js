import api from "../api/axios"

export const login = async (loginRequest) => {
    const response = await api.post("/auth/login", loginRequest);
    return response.data;
};

export const register = async (RegisterRequest) => {
    const response = await api.post("/auth/register", RegisterRequest)
    return response.data;
};

