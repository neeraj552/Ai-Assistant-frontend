import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

function UploadCard({
    onSelect,
    inputRef,
}) {

    const [dragActive, setDragActive] = useState(false);

    function handleDragOver(event) {
        event.preventDefault();
        setDragActive(true);
    }

    function handleDragEnter(event) {
        event.preventDefault();
        setDragActive(true);
    }

    function handleDragLeave(event) {
        event.preventDefault();
        setDragActive(false);
    }

    function handleDrop(event) {
        event.preventDefault();

        setDragActive(false);

        const file = event.dataTransfer.files[0];

        if (!file) {
            return;
        }

        onSelect({
            target: {
                files: [file],
            },
        });
    }

    return (

        <motion.div
            whileHover={{
                scale: 1.01,
            }}
            animate={{
                scale: dragActive ? 1.02 : 1,
            }}
            transition={{
                duration: 0.2,
            }}
            className={`
                mb-10
                rounded-3xl
                border-2
                border-dashed
                backdrop-blur-xl
                p-12
                text-center
                cursor-pointer
                transition-all
                duration-300
                ${
                    dragActive
                        ? "border-blue-500 bg-blue-500/10 shadow-2xl shadow-blue-500/20"
                        : "border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
                }
            `}
            onClick={() => inputRef.current.click()}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >

            <motion.div
                animate={{
                    y: dragActive ? -8 : 0,
                    scale: dragActive ? 1.15 : 1,
                }}
                transition={{
                    duration: 0.2,
                }}
            >

                <UploadCloud
                    size={64}
                    className="mx-auto text-blue-400"
                />

            </motion.div>

            <h2 className="mt-6 text-2xl font-bold">

                {dragActive
                    ? "Release to Upload"
                    : "Drag & Drop your PDF"}

            </h2>

            <p className="mt-3 text-slate-400">

                {dragActive
                    ? "Drop your PDF anywhere inside this area."
                    : "or click here to browse your computer"}

            </p>

            <p className="mt-2 text-sm text-slate-500">
                PDF only • Max 10 MB
            </p>

            <input
                ref={inputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={onSelect}
            />

        </motion.div>

    );

}

export default UploadCard;