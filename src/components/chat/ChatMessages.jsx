function ChatMessages({ children }) {
    return (
        <div
            className="
                flex-1
                overflow-y-auto
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-6
                min-h-0
            "
        >
            {children}
        </div>
    );
}

export default ChatMessages;