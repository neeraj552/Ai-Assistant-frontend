import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

import { previewFile } from "../../services/fileService";

function PdfPreviewModal({
    open,
    fileId,
    fileName,
    onClose,
}) {

    const [pdfUrl, setPdfUrl] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!open || !fileId) {
            return;
        }

        let objectUrl = null;

        async function loadPdf() {

            try {

                setLoading(true);

                const blob = await previewFile(fileId);

                objectUrl = URL.createObjectURL(blob);

                setPdfUrl(objectUrl);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadPdf();

        return () => {

            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }

            setPdfUrl("");

        };

    }, [open, fileId]);

    if (!open) {
        return null;
    }

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
            >

                <motion.div
                    initial={{
                        scale: 0.9,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    exit={{
                        scale: 0.9,
                        opacity: 0,
                    }}
                    className="
                        relative
                        h-[90vh]
                        w-[90vw]
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-700
                        bg-slate-900
                    "
                >

                    {/* Header */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-700
                            p-5
                        "
                    >

                        <h2 className="text-xl font-bold">
                            {fileName}
                        </h2>

                        <button
                            onClick={onClose}
                            className="
                                rounded-lg
                                p-2
                                transition
                                hover:bg-slate-800
                            "
                        >
                            <X />
                        </button>

                    </div>

                    {/* Body */}

                    {loading ? (

                        <div
                            className="
                                flex
                                h-[calc(90vh-72px)]
                                items-center
                                justify-center
                            "
                        >

                            <div className="text-center">

                                <Loader2
                                    size={48}
                                    className="
                                        mx-auto
                                        mb-4
                                        animate-spin
                                        text-blue-400
                                    "
                                />

                                <p className="text-slate-400">
                                    Loading PDF...
                                </p>

                            </div>

                        </div>

                    ) : (

                        <iframe
                            title="PDF Preview"
                            src={pdfUrl}
                            className="
                                h-[calc(90vh-72px)]
                                w-full
                            "
                        />

                    )}

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );

}

export default PdfPreviewModal;