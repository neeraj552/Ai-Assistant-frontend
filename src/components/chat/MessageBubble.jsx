function MessageBubble({ sender, message }) {

    return (
        <div
            className={`mb-4 flex ${
                sender === "user"
                    ? "justify-end"
                    : "justify-start"
            }`}
        >
            <div
                className={`max-w-lg rounded-xl px-4 py-3 ${
                    sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                }`}
            >
                {message}
            </div>
        </div>
    );
}

export default MessageBubble;