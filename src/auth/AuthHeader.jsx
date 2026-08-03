import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {  fadeUp } from "../animations/variants";

function AuthHeader({ title, subtitle }) {
    return (
        <motion.div
        variants={fadeUp}
        className="mb-10 text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">

                <Sparkles
                    className="text-white"
                    size={30}
                />

            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white">
                {title}
            </h1>

            <p className="mt-3 text-slate-400">
                {subtitle}
            </p>

        </motion.div>
    );
}

export default AuthHeader;