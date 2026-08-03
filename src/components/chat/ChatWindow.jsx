import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import SummaryCard from "./SummaryCard";

import {
    getChatHistory,
    askQuestion,
    deleteChatHistory
} from "../../services/chatService";

import {
    getSummary,
    generateSummary
} from "../../services/summaryService";

function ChatWindow() {

    const { fileId } = useParams();
    const location = useLocation();

    const fileName = location.state?.fileName ?? "Unknown Document";

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [summary, setSummary] = useState(null);
    const [summaryLoading, setSummaryLoading] = useState(false);

    useEffect(() => {

        async function loadChat() {

            try {

                setLoading(true);

                const history = await getChatHistory(fileId);

                setMessages(history);

            } catch (error) {

                console.error("Failed to load chat history:", error);

            } finally {

                setLoading(false);

            }

        }

        async function loadSummary() {

            try {

                const response = await getSummary(fileId);

                setSummary(response);

            } catch (error) {

                // Ignore if summary hasn't been generated yet
                if (error.response?.status !== 404) {
                    console.error("Failed to load summary:", error);
                }

            }

        }

        if (fileId) {

            loadChat();
            loadSummary();

        }

    }, [fileId]);

    async function handleDeleteChat() {

        const confirmed = window.confirm(
            "Are you sure you want to delete this chat history?"
        );

        if (!confirmed) return;

        try {

            await deleteChatHistory(fileId);

            setMessages([]);

        } catch (error) {

            console.error("Failed to delete chat history:", error);

            alert("Failed to delete chat history.");

        }

    }

    async function handleGenerateSummary() {

        try {

            setSummaryLoading(true);

            const response = await generateSummary(fileId);

            setSummary(response);

        } catch (error) {

            console.error("Failed to generate summary:", error);

            alert("Failed to generate summary.");

        } finally {

            setSummaryLoading(false);

        }

    }

    async function handleSendMessage(question) {

        const tempId = `temp-${Date.now()}`;

        const tempChat = {
            id: tempId,
            question,
            answer: "",
            isPending: true
        };

        setMessages(prev => [...prev, tempChat]);

        try {

            const response = await askQuestion(fileId, question);

            setMessages(prev =>
                prev.map(chat =>
                    chat.id === tempId ? response : chat
                )
            );

        } catch (error) {

            console.error("Failed to send message:", error);

            setMessages(prev =>
                prev.filter(chat => chat.id !== tempId)
            );

        }

    }

    return (

        <div className="flex flex-col h-screen bg-gray-100">

            <ChatHeader
                fileName={fileName}
                onDeleteChat={handleDeleteChat}
            />

            <main className="flex-1 overflow-y-auto">

                <div className="max-w-4xl mx-auto px-6 py-8">

                    <SummaryCard
                        summary={summary}
                        loading={summaryLoading}
                        onGenerate={handleGenerateSummary}
                    />

                    {messages.map(chat => (

                        <div key={chat.id}>

                            <MessageBubble
                                sender="user"
                                message={chat.question}
                            />

                            <MessageBubble
                                sender="assistant"
                                message={chat.answer}
                                loading={chat.isPending}
                            />

                        </div>

                    ))}

                </div>

            </main>

            <footer className="border-t bg-white">

                <div className="max-w-4xl mx-auto p-5">

                    <ChatInput
                        onSend={handleSendMessage}
                        disabled={loading}
                    />

                </div>

            </footer>

        </div>

    );

}

export default ChatWindow;