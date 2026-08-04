import { Sparkles, Clipboard, X } from "lucide-react";
import Button from "../ui/Button";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";

function SummaryContent({
    fileName,
    summary,
    onClose,
}) {

    async function handleCopy() {

        try {

            await navigator.clipboard.writeText(summary.summary);

            toast.success("Summary copied!");

        } catch (error) {

            console.error(error);

            toast.error("Failed to copy summary.");

        }

    }

    return (

        <>


            <div className="flex items-center gap-4">

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

                    <Sparkles
                        size={28}
                        className="text-blue-400"
                    />

                </div>

                <div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-white
                        "
                    >
                        AI Summary
                    </h2>

                    <p className="text-slate-400">
                        {fileName}
                    </p>

                </div>

            </div>

            <div className="my-6 border-t border-slate-800" />

           

            <div
                className="
                    max-h-[500px]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/50
                    p-8
                "
            >

                <ReactMarkdown

                    components={{

                        h1: ({ children }) => (
                            <h1 className="mb-6 text-3xl font-bold text-white">
                                {children}
                            </h1>
                        ),

                        h2: ({ children }) => (
                            <h2 className="mt-8 mb-3 text-2xl font-semibold text-blue-300">
                                {children}
                            </h2>
                        ),

                        h3: ({ children }) => (
                            <h3 className="mt-6 mb-2 text-xl font-semibold text-white">
                                {children}
                            </h3>
                        ),

                        p: ({ children }) => (
                            <p className="mb-4 leading-8 text-slate-300">
                                {children}
                            </p>
                        ),

                        ul: ({ children }) => (
                            <ul className="mb-5 list-disc pl-6 text-slate-300">
                                {children}
                            </ul>
                        ),

                        ol: ({ children }) => (
                            <ol className="mb-5 list-decimal pl-6 text-slate-300">
                                {children}
                            </ol>
                        ),

                        li: ({ children }) => (
                            <li className="mb-2">
                                {children}
                            </li>
                        ),

                        strong: ({ children }) => (
                            <strong className="font-semibold text-white">
                                {children}
                            </strong>
                        ),

                        blockquote: ({ children }) => (
                            <blockquote
                                className="
                                    my-5
                                    border-l-4
                                    border-blue-500
                                    pl-4
                                    italic
                                    text-slate-400
                                "
                            >
                                {children}
                            </blockquote>
                        ),

                        code: ({ children }) => (
                            <code
                                className="
                                    rounded
                                    bg-slate-800
                                    px-1.5
                                    py-1
                                    text-blue-300
                                "
                            >
                                {children}
                            </code>
                        ),

                    }}

                >
                    {summary.summary}
                </ReactMarkdown>

            </div>


            <div className="mt-8 flex justify-end gap-4">

                <Button
                    variant="secondary"
                    className="gap-2"
                    onClick={handleCopy}
                >
                    <Clipboard size={18} />
                    Copy
                </Button>

                <Button
                    className="gap-2"
                    onClick={onClose}
                >
                    <X size={18} />
                    Close
                </Button>

            </div>

        </>

    );

}

export default SummaryContent;