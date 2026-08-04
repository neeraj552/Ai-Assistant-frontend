import { motion } from "framer-motion";

function LiquidBackground() {

    return (

        <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

            {/* Blob 1 */}

            <motion.div

                animate={{

                    x: [0, 120, -80, 0],

                    y: [0, -120, 80, 0],

                    scale: [1, 1.2, 0.9, 1],

                }}

                transition={{

                    duration: 18,

                    repeat: Infinity,

                    ease: "easeInOut",

                }}

                className="
                    absolute
                    top-20
                    left-20
                    h-96
                    w-96
                    rounded-full
                    bg-blue-500/20
                    blur-[120px]
                "
            />

            {/* Blob 2 */}

            <motion.div

                animate={{

                    x: [0, -150, 80, 0],

                    y: [0, 100, -80, 0],

                    scale: [1, .85, 1.1, 1],

                }}

                transition={{

                    duration: 22,

                    repeat: Infinity,

                    ease: "easeInOut",

                }}

                className="
                    absolute
                    bottom-20
                    right-20
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-violet-500/20
                    blur-[140px]
                "
            />

            {/* Blob 3 */}

            <motion.div

                animate={{

                    x: [0, 60, -120, 0],

                    y: [0, 80, -40, 0],

                    scale: [1, 1.15, .95, 1],

                }}

                transition={{

                    duration: 26,

                    repeat: Infinity,

                    ease: "easeInOut",

                }}

                className="
                    absolute
                    top-1/2
                    left-1/2
                    h-80
                    w-80
                    rounded-full
                    bg-cyan-500/15
                    blur-[110px]
                "
            />

        </div>

    );

}

export default LiquidBackground;