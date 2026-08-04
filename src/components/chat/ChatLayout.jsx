import LiquidBackground from "../../background/LiquidBackground";

function ChatLayout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">

            <LiquidBackground />

            <div className="relative z-10 mx-auto flex h-screen max-w-6xl flex-col px-6 py-6">

                {children}

            </div>

        </div>
    );
}

export default ChatLayout;