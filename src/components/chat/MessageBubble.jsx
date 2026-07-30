import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({
    sender,
    message,
    loading = false
}) {

    const isUser = sender === "user";

    return (
        <div
            className={`flex mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`flex items-end gap-3 max-w-3xl ${
                    isUser ? "flex-row-reverse" : ""
                }`}
            >
                {/* Avatar */}
                <div
                    className={`p-2 rounded-full ${
                        isUser
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    {isUser ? (
                        <User size={18} />
                    ) : (
                        <Bot size={18} />
                    )}
                </div>

                <div>
                    <p className="text-xs text-gray-500 mb-1">
                        {isUser ? "You" : "AI Assistant"}
                    </p>

                    <div
                        className={`rounded-2xl px-5 py-3 shadow-sm ${
                            isUser
                                ? "bg-blue-600 text-white"
                                : "bg-white border text-gray-800"
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center gap-2 h-6">

                                <span
                                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                />

                                <span
                                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                    style={{ animationDelay: "150ms" }}
                                />

                                <span
                                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                    style={{ animationDelay: "300ms" }}
                                />

                            </div>
                        ) : (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {message}
                            </ReactMarkdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageBubble;