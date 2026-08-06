import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ChatLayout from "../components/chat/ChatLayout";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";
import MessageBubble from "../components/chat/MessageBubble";
import TypingIndicator from "../components/chat/TypingIndicator";
import PromptSelector from "../components/chat/PromptSelector";
import PromptSuggestions from "../components/chat/PromptSuggestions";

import {
    getChatHistory,
    askQuestion,
} from "../services/chatService";

function Chat() {

    const location = useLocation();
    const { fileId } = useParams();

    const fileName =
        location.state?.fileName || "Unknown Document";

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [promptType, setPromptType] = useState("CHAT");
    const [showSuggestions, setShowSuggestions] = useState(true);

    const bottomRef = useRef(null);

    useEffect(() => {
        loadChatHistory();
    }, []);

    async function loadChatHistory() {

        try {

            const history = await getChatHistory(fileId);

            const formattedMessages = [];

            history.forEach((chat) => {

                formattedMessages.push({
                    id: `${chat.id}-q`,
                    role: "USER",
                    content: chat.question,
                });

                formattedMessages.push({
                    id: `${chat.id}-a`,
                    role: "AI",
                    content: chat.answer,
                });

            });

            if (formattedMessages.length === 0) {

                formattedMessages.push({
                    id: "welcome",
                    role: "AI",
                    content:
                        "Hello! 👋 I'm your AI assistant. Ask me anything about this document.",
                });

            }

            setMessages(formattedMessages);

        } catch (error) {

            console.error(error);
            toast.error("Failed to load chat history.");

        }

    }

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    async function handleSend(question) {

        const userMessage = {
            id: Date.now(),
            role: "USER",
            content: question,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setLoading(true);

        try {

            const response = await askQuestion(
                fileId,
                question,
                promptType
            );

            setMessages((previous) => [

                ...previous,

                {
                    id: `${response.id}-a`,
                    role: "AI",
                    content: response.answer,
                },

            ]);

        } catch (error) {

            console.error(error);
            toast.error("Failed to get AI response.");

        } finally {

            setLoading(false);

        }

    }

    async function handleSuggestion(text) {

        setShowSuggestions(false);

        await handleSend(text);

    }

    function handlePromptChange(type) {

        setPromptType(type);

        setShowSuggestions(true);

    }

    const hasConversation = messages.some(
        (message) => message.id !== "welcome"
    );

    return (

        <ChatLayout>

            <ChatHeader
                fileName={fileName}
            />

            <ChatMessages>

                {messages.map((message) => (

                    <MessageBubble
                        key={message.id}
                        message={message.content}
                        isUser={message.role === "USER"}
                    />

                ))}

                {loading && (

                    <TypingIndicator />

                )}

                <div ref={bottomRef} />

            </ChatMessages>

            <div className="mt-6">

                <PromptSelector
                    promptType={promptType}
                    onChange={handlePromptChange}
                    onToggle={() =>
                        setShowSuggestions((previous) => !previous)
                    }
                />

                { showSuggestions && (

                    <PromptSuggestions
                        promptType={promptType}
                        onSelect={handleSuggestion}
                    />

                )}

            </div>

            <ChatInput
                onSend={handleSend}
            />

        </ChatLayout>

    );

}

export default Chat;