import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";
function AuthCard({ children }) {
    return (
        <motion.div
            variants={staggerContainer}

            initial="hidden"

            animate="visible"
            
            transition={{
                duration:0.6,
                ease: "easeOut"
            }}

            className="
                w-full
                max-w-md
                rounded-3xl
                bg-slate-900/80
                backdrop-blur-2xl
                border
                border-slate-700
                p-10
                shadow-2xl
                shadow-black/40
            "
        >
            {children}
        </motion.div>
    );
}

export default AuthCard;