import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

function ChatInput({ onSend }) {

    const [message, setMessage] = useState("");

    function handleSend() {
       if(!message.trim()){
        return;
       }

       onSend(message);
       setMessage("");
    }

    return (
        <div className="flex gap-3">

            <Input
                placeholder="Ask anything..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />

            <Button
            variant="secondary" 
            onClick={handleSend} 
            >
                Send
            </Button>

        </div>
    );
}

export default ChatInput;