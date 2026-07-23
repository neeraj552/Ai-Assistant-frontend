import { useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

function ChatWindow(){
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

    function handleSendMessage(message){
        setMessages((previousMessage) =>[
            ...previousMessage,
            {
                sender: "user",
                message: message
            }
        ]);
    }

    return (
        <div className="flex flex-col h-screen">
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
                <ChatInput onSend={handleSendMessage}/>
            </div>
        </div>
    );
}

export default ChatWindow;