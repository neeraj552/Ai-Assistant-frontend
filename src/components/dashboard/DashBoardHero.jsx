import { motion } from "framer-motion";
import {
    FileText,
    Sparkles,
    MessageSquare,
    HardDrive,
} from "lucide-react";

import { formatFileSize } from "../../utils/fileUtils";

function DashboardHero({ stats }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-10
                mb-10
            "
        >
            <div className="relative z-10">

                <p className="font-semibold text-blue-400">
                    AI DOCUMENT ASSISTANT
                </p>

                <h1 className="mt-4 text-5xl font-bold">
                    Welcome Back 👋
                </h1>

                <p className="mt-5 max-w-2xl text-lg text-slate-400">
                    Upload PDFs, generate summaries,
                    and chat with your documents using AI.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Documents */}
                    <div className="rounded-2xl bg-slate-800 p-5">
                        <FileText className="mb-2 text-blue-400" />

                        <p className="text-3xl font-bold">
                            {stats?.totalDocuments ?? 0}
                        </p>

                        <span className="text-slate-400">
                            Documents
                        </span>
                    </div>

                    {/* Summaries */}
                    <div className="rounded-2xl bg-slate-800 p-5">
                        <Sparkles className="mb-2 text-violet-400" />

                        <p className="text-3xl font-bold">
                            {stats?.totalSummaries ?? 0}
                        </p>

                        <span className="text-slate-400">
                            Summaries
                        </span>
                    </div>

                    {/* Chats */}
                    <div className="rounded-2xl bg-slate-800 p-5">
                        <MessageSquare className="mb-2 text-cyan-400" />

                        <p className="text-3xl font-bold">
                            {stats?.totalChats ?? 0}
                        </p>

                        <span className="text-slate-400">
                            Chats
                        </span>
                    </div>

                    {/* Storage */}
                    <div className="rounded-2xl bg-slate-800 p-5">
                        <HardDrive className="mb-2 text-emerald-400" />

                        <p className="text-3xl font-bold">
                            {formatFileSize(stats?.storageUsed ?? 0)}
                        </p>

                        <span className="text-slate-400">
                            Storage
                        </span>
                    </div>

                </div>

            </div>
        </motion.section>
    );
}

export default DashboardHero;