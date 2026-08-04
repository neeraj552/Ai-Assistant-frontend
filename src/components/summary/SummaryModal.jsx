import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


function SummaryModal({
    open,
    children,
    onClose,
}) {

    useEffect(() => {

        if(open){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (

        <AnimatePresence>

            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-black/70
                    backdrop-blur-sm
                "

                onClick={onClose}
            >

                <motion.div

                    initial={{
                        opacity: 0,
                        scale: .95,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    exit={{
                        opacity: 0,
                        scale: .95,
                    }}

                    onClick={(event) =>
                        event.stopPropagation()
                    }

                    className="
                        w-full
                        max-w-3xl
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900
                        p-8
                        shadow-2xl
                    "

                >

                    {children}

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );

}

export default SummaryModal;