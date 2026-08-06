import { FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";

function SelectedFileCard({

    file,
    uploading,
    uploadProgress,
    onUpload,

}) {

    if (!file) return null;

    const size = (file.size / (1024 * 1024)).toFixed(2);

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
            "

        >

            <div
                className="
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

                        <h3 className="font-semibold">
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

            </div>

            {uploading && (

                <div className="mt-6">

                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            justify-between
                            text-sm
                        "
                    >

                        <span className="text-slate-400">
                            Uploading...
                        </span>

                        <span className="font-semibold text-blue-400">
                            {uploadProgress}%
                        </span>

                    </div>

                    <div
                        className="
                            h-3
                            overflow-hidden
                            rounded-full
                            bg-slate-800
                        "
                    >

                        <motion.div

                            initial={{
                                width: 0,
                            }}

                            animate={{
                                width: `${uploadProgress}%`,
                            }}

                            transition={{
                                duration: 0.2,
                            }}

                            className="
                                h-full
                                rounded-full
                                bg-blue-500
                            "

                        />

                    </div>

                </div>

            )}

            {!uploading && uploadProgress === 100 && (

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-green-400
                    "

                >

                    <CheckCircle size={20} />

                    <span>
                        Upload completed successfully
                    </span>

                </motion.div>

            )}

        </motion.div>

    );

}

export default SelectedFileCard;