import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

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

                    {message}

                </div>

            </div>

        </motion.div>

    );

}

export default MessageBubble;