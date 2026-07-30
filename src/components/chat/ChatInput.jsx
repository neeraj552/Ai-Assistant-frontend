import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import Input from "../ui/Input";

function ChatInput({ onSend }) {

    const [message, setMessage] = useState("");

    function handleSend() {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    }

    function handleKeyDown(event) {

        if (event.key === "Enter") {

            handleSend();

        }

    }

    return (

        <div className="relative">

            <Input
                placeholder="Ask anything about this document..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pr-14"
            />

            <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-600
                    p-2
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:bg-gray-400
                    disabled:cursor-not-allowed
                "
            >
                <SendHorizontal size={18}/>
            </button>

        </div>

    );
}

export default ChatInput;