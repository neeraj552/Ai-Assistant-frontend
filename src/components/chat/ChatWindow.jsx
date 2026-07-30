import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

import {
    getChatHistory,
    askQuestion
} from "../../services/chatService";

function ChatWindow() {

    const { fileId } = useParams();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function loadHistory() {

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

        if (fileId) {
            loadHistory();
        }

    }, [fileId]);

    async function handleSendMessage(question) {

    const tempId = `temp-${Date.now()}`;

    const tempChat = {
        id: tempId,
        question,
        answer: "",
        isPending: true
    };

    // Show question + thinking bubble immediately
    setMessages(prev => [...prev, tempChat]);

    try {

        const response = await askQuestion(fileId, question);

        // Replace the temporary message with the real response
        setMessages(prev =>
            prev.map(chat =>
                chat.id === tempId ? response : chat
            )
        );

    } catch (error) {

        console.error(error);

        // Remove temporary message on error
        setMessages(prev =>
            prev.filter(chat => chat.id !== tempId)
        );

    }
}

    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <ChatHeader />

            <main className="flex-1 overflow-y-auto">

                <div className="max-w-4xl mx-auto px-6 py-8">

                    {messages.map((chat) => (
                        <div key={chat.id}>

                            <MessageBubble
                                sender="user"
                                message={chat.question}
                            />

                            <MessageBubble
                                sender="assistant"
                                message={chat.answer}
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