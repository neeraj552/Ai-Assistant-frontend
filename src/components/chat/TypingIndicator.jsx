import { Bot } from "lucide-react";
import { motion } from "framer-motion";

function TypingIndicator() {

    return (

        <div className="flex mb-6">

            <div className="flex gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-500
                    "
                >
                    <Bot
                        size={22}
                        className="text-white"
                    />
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/80
                        px-6
                        py-5
                    "
                >

                    {[0, 1, 2].map((dot) => (

                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -6, 0],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.8,
                                delay: dot * 0.15,
                            }}
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-blue-400
                            "
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

export default TypingIndicator;