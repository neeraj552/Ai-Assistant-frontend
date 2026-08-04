import api from "../api/axios"

export const login = async (loginRequest) => {
    const response = await api.post("/auth/login", loginRequest);
    return response.data;
};

export const register = async (RegisterRequest) => {
    const response = await api.post("/auth/register", RegisterRequest)
    return response.data;
};

export async function forgotPassword(request) {
    await api.post("/auth/forgot-password", request);
}

export async function resetPassword(request) {

    await api.post("/auth/reset-password", request);

}