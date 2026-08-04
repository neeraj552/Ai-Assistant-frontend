import { FileText } from "lucide-react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

function SelectedFileCard({

    file,
    uploading,
    onUpload,

}) {

    if (!file) return null;

    const size =
        (file.size / (1024 * 1024)).toFixed(2);

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 15,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            className="
                mt-6
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-6
                flex
                items-center
                justify-between
            "

        >

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                <FileText
                    size={42}
                    className="text-blue-400"
                />

                <div>

                    <h3
                        className="font-semibold"
                    >
                        {file.name}
                    </h3>

                    <p
                        className="
                            text-sm
                            text-slate-400
                        "
                    >
                        {size} MB
                    </p>

                </div>

            </div>

            <Button

                loading={uploading}

                loadingText="Uploading..."

                onClick={onUpload}

            >

                Upload Document

            </Button>

        </motion.div>

    );

}

export default SelectedFileCard;