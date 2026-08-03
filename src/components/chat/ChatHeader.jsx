import { ArrowLeft, Trash2, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function ChatHeader({ fileName, onDeleteChat }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">

            <div className="flex items-center gap-4">

                <button
                    onClick={() => navigate("/dashboard")}
                    className="rounded-lg p-2 hover:bg-gray-100 transition"
                >
                    <ArrowLeft size={22} />
                </button>

                <div className="flex items-center gap-3">
                    <FileText className="text-red-500" size={24} />

                    <div>
                        <h2 className="font-semibold text-lg">
                            {fileName}
                        </h2>

                        <p className="text-sm text-gray-500">
                            AI Document Assistant
                        </p>
                    </div>
                </div>

            </div>

            <Button 
            variant="danger"
            onClick={onDeleteChat}
            >
                <Trash2 size={18} />
                Delete Chat
            </Button>

        </div>
    );
}

export default ChatHeader;