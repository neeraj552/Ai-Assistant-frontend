import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import Button from "../ui/Button";

function ChatInput({ onSend }) {

    const [question, setQuestion] = useState("");

    function handleSubmit() {

        if (!question.trim()) {
            return;
        }

        onSend(question);

        setQuestion("");

    }

    return (

        <div className="mt-6 flex gap-4">

            <input
                value={question}
                onChange={(event) =>
                    setQuestion(event.target.value)
                }
                onKeyDown={(event) => {

                    if (event.key === "Enter") {
                        handleSubmit();
                    }

                }}
                className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    px-6
                    py-4
                    text-white
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:outline-none
                "
                placeholder="Ask anything about your document..."
            />

            <Button
                onClick={handleSubmit}
            >
                <SendHorizontal size={20} />
            </Button>

        </div>

    );

}

export default ChatInput;