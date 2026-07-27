import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {

        const publicEndpoints = [
            "/auth/login",
            "/auth/register",
        ];

        const isPublicEndpoint = publicEndpoints.some((endpoint) =>
            config.url?.includes(endpoint)
        );

        if (!isPublicEndpoint) {
            const token = localStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;