import { FileText } from "lucide-react";
import { motion } from "framer-motion";

function EmptyState() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
                rounded-3xl
                border
                border-dashed
                border-slate-800
                bg-slate-900/60
                backdrop-blur-xl
                p-16
                text-center
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-500/10
                "
            >
                <FileText
                    size={40}
                    className="text-blue-400"
                />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
                No documents yet
            </h2>

            <p className="mt-3 text-slate-400">
                Upload your first PDF to start chatting with AI.
            </p>
        </motion.div>
    );
}

export default EmptyState;