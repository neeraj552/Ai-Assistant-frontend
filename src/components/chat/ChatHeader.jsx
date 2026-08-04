import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function ChatHeader({ fileName }) {

    const navigate = useNavigate();

    return (

        <div
            className="
                mb-6
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-6
            "
        >

            <div className="flex items-center gap-4">

                <Button
                    variant="secondary"
                    onClick={() => navigate("/dashboard")}
                >
                    <ArrowLeft size={18} />
                </Button>

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-500/10
                    "
                >
                    <FileText
                        size={28}
                        className="text-blue-400"
                    />
                </div>

                <div>

                    <h2 className="text-xl font-bold text-white">
                        {fileName}
                    </h2>

                    <p className="text-slate-400">
                        AI Document Assistant
                    </p>

                </div>

            </div>

        </div>

    );

}

export default ChatHeader;