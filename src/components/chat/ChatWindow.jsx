import { useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import FileSelector from "../files/FileSelector";
import FileModal from "../files/FileModal";

function ChatWindow() {

    const [messages, setMessages] = useState([
        {
            sender: "assistant",
            message: "Hello! How can I help you today?"
        },
        {
            sender: "user",
            message: "Explain Spring Boot."
        }
    ]);

    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSendMessage(message) {
        setMessages((previousMessages) => [
            ...previousMessages,
            {
                sender: "user",
                message
            }
        ]);
    }

    return (
        <div className="flex flex-col h-screen">

            <FileSelector
                selectedFile={selectedFile}
                onChangeDocument={() => setIsModalOpen(true)}
            />

            {isModalOpen && (
                <FileModal
                    onClose={() => setIsModalOpen(false)}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                />
            )}

            <div className="flex-1 overflow-y-auto p-6">

                {messages.map((msg, index) => (
                    <MessageBubble
                        key={index}
                        sender={msg.sender}
                        message={msg.message}
                    />
                ))}

            </div>

            <div className="border-t p-4">
                <ChatInput onSend={handleSendMessage} />
            </div>

        </div>
    );
}

export default ChatWindow;