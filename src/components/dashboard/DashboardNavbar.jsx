import { motion } from "framer-motion";
import { Bot, LogOut } from "lucide-react";

import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";
function DashboardNavbar() {

    const { logout } = useAuth();

    return (

        <motion.header

            initial={{ y: -40, opacity: 0 }}

            animate={{ y: 0, opacity: 1 }}

            transition={{ duration: .5 }}

            className="
                mb-10
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                px-8
                py-5
                shadow-xl
            "

        >

            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-500
                        to-violet-500
                    "
                >

                    <Bot className="text-white" size={26} />

                </div>

                <div>

                    <h1 className="text-xl font-bold">

                        AI Document Assistant

                    </h1>

                    <p className="text-sm text-slate-400">

                        Chat with your documents

                    </p>

                </div>

            </div>

            <Button

                variant="secondary"

                className="gap-2"

                onClick={logout}

            >

                <LogOut size={18} />

                Logout

            </Button>

        </motion.header>

    );

}

export default DashboardNavbar;