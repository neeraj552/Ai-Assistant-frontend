import { Sparkles } from "lucide-react";

function SummarySkeleton(){

     return (

        <div>

            {/* Header */}

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

                <div className="flex-1">

                    <div
                        className="
                            h-6
                            w-48
                            animate-pulse
                            rounded-lg
                            bg-slate-700
                        "
                    />

                    <div
                        className="
                            mt-3
                            h-4
                            w-72
                            animate-pulse
                            rounded-lg
                            bg-slate-800
                        "
                    />

                </div>

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-slate-800" />

            {/* Summary */}

            <div
                className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/60
                    p-6
                "
            >

                {[...Array(8)].map((_, index) => (

                    <div
                        key={index}
                        className={`
                            mb-4
                            h-4
                            animate-pulse
                            rounded-lg
                            bg-slate-700
                            ${
                                index === 7
                                    ? "w-2/3"
                                    : "w-full"
                            }
                        `}
                    />

                ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 flex justify-end gap-4">

                <div
                    className="
                        h-11
                        w-28
                        animate-pulse
                        rounded-xl
                        bg-slate-700
                    "
                />

                <div
                    className="
                        h-11
                        w-40
                        animate-pulse
                        rounded-xl
                        bg-slate-700
                    "
                />

            </div>

        </div>

    );

}

export default SummarySkeleton;