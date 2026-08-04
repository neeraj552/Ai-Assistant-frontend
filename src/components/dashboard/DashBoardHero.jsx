import { motion } from "framer-motion";
import {FileText, Sparkles, MessageSquare} from "lucide-react";

function DashboardHero(){
    return (

        <motion.section
        intial = {{opacity: 0, y: 20}}
        animate= {{opacity: 1, y: 0}}
        transition={{ duration: .6}}
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

                <p className="text-blue-400 font-semibold">
                    Ai DOCUMENT ASSISTANT
                </p>
                <h1 className="mt-4 text-5xl font-bold">
                    
                    Welcome Back 👋

                </h1>

                <p className="mt-5 max-w-2xl text-slate-400 text-lg">

                    Upload PDFs, generate summaries,
                    and chat with your document using AI.

                </p>

                <div className="mt-8 flex gap-5">
                    <div className="rounded-2xl bg-slate-800 p-5">

                        <FileText className="mb-2 text-blue-400 "/>

                        <p className="text-3xl font-bold">

                            27

                        </p>

                        <span className="text-slate-400">
                            Documents
                        </span>

                    </div>

                    <div className="rounded-2xl bg-slate-800 p-5">
                        <Sparkles className="mb-2 text-violet-400"/>

                        <p className="text-3xl font-bold">

                            AI

                        </p>

                        <span className="text-slate-400">
                            Summary
                        </span>

                    </div>

                    <div className=" rounded-2xl bg-slate-800 p-5">
                        <MessageSquare className="mb-2 text-cyan-400"/>
                        <p className=" text-3xl font-bold">
                            Chat
                        </p>
                        <span className="text-slate-400">
                            Assistant
                        </span>
                    </div>
                </div>

            </div>
        </motion.section>

    );
}
export default DashboardHero;