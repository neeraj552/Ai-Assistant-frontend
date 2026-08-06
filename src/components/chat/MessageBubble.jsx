import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({
    message,
    isUser,
}) {

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className={`flex mb-6 ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`
                    flex
                    max-w-3xl
                    gap-4
                    ${
                        isUser
                            ? "flex-row-reverse"
                            : ""
                    }
                `}
            >

                {/* Avatar */}

                <div
                    className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        ${
                            isUser
                                ? "bg-violet-500"
                                : "bg-blue-500"
                        }
                    `}
                >

                    {isUser ? (

                        <User
                            size={22}
                            className="text-white"
                        />

                    ) : (

                        <Bot
                            size={22}
                            className="text-white"
                        />

                    )}

                </div>

                {/* Message */}

                <div
                    className={`
                        rounded-3xl
                        px-6
                        py-4
                        leading-7
                        shadow-lg
                        ${
                            isUser
                                ? "bg-violet-600 text-white"
                                : "border border-slate-800 bg-slate-900/80 text-slate-100"
                        }
                    `}
                >

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{

                            h1: ({ children }) => (
                                <h1 className="mb-4 text-2xl font-bold">
                                    {children}
                                </h1>
                            ),

                            h2: ({ children }) => (
                                <h2 className="mb-3 mt-6 text-xl font-semibold">
                                    {children}
                                </h2>
                            ),

                            h3: ({ children }) => (
                                <h3 className="mb-2 mt-4 text-lg font-semibold">
                                    {children}
                                </h3>
                            ),

                            p: ({ children }) => (
                                <p className="mb-3 leading-7">
                                    {children}
                                </p>
                            ),

                            ul: ({ children }) => (
                                <ul className="mb-4 list-disc pl-6">
                                    {children}
                                </ul>
                            ),

                            ol: ({ children }) => (
                                <ol className="mb-4 list-decimal pl-6">
                                    {children}
                                </ol>
                            ),

                            li: ({ children }) => (
                                <li className="mb-2">
                                    {children}
                                </li>
                            ),

                            strong: ({ children }) => (
                                <strong className="font-bold text-white">
                                    {children}
                                </strong>
                            ),

                            code: ({ children }) => (
                                <code className="rounded bg-slate-800 px-2 py-1 text-blue-300">
                                    {children}
                                </code>
                            ),

                        }}
                    >

                        {message}

                    </ReactMarkdown>

                </div>

            </div>

        </motion.div>

    );

}

export default MessageBubble;