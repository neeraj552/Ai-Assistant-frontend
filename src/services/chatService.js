import api from "../api/axios";

export async function getChatHistory(fileId) {

    const response = await api.get(`/chat/${fileId}`);

    return response.data;
}

export async function askQuestion(fileId, question, promptType = "CHAT") {

    const response = await api.post(
        `/chat/${fileId}`,
        {
            question,
            promptType,
        }
    );

    return response.data;
}

export async function deleteChatHistory(fileId) {

    await api.delete(`/chat/${fileId}`);
}