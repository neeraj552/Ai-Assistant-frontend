import api from "../api/axios";

export const askQuestion = async (fileId, question) => {
    const response = await api.post(
        `/chat/${fileId}`,
        {
            question: question
        }
    );

    return response.data;
};