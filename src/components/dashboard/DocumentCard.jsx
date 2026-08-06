import { motion } from "framer-motion";
import {
    FileText,
    Download,
    Trash2,
    MessageSquare,
    Sparkles,
    Eye,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

import {
    formatFileSize,
    formatUploadDate,
    formatStatus,
    getStatusVariant,
} from "../../utils/fileUtils";

function DocumentCard({
    file,
    onDownload,
    onDelete,
    onSummary,
    onPreview,
}) {

    const navigate = useNavigate();

    return (

        <motion.div
            whileHover={{
                y: -6,
                scale: 1.01,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-6
                transition-all
                hover:border-blue-500/40
                hover:shadow-2xl
                hover:shadow-blue-500/10
            "
        >

            {/* Header */}

            <div className="flex items-start justify-between gap-4">

                <div className="flex min-w-0 flex-1 gap-4">

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-500/10
                        "
                    >
                        <FileText
                            size={28}
                            className="text-blue-400"
                        />
                    </div>

                    <div className="min-w-0 flex-1">

                        <h3
                            className="
                                truncate
                                text-lg
                                font-semibold
                                text-white
                            "
                            title={file.originalName}
                        >
                            {file.originalName}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            {formatFileSize(file.fileSize)}
                            {" • "}
                            Uploaded {formatUploadDate(file.uploadedAt)}
                        </p>

                    </div>

                </div>

                <Badge variant={getStatusVariant(file.status)}>
                    {formatStatus(file.status)}
                </Badge>

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-slate-800" />

            {/* Actions */}

            <div className="space-y-3">

                {/* Chat + Summary */}

                <div className="flex gap-3">

                    <Button
                        className="flex-1 gap-2"
                        onClick={() =>
                            navigate(`/chat/${file.id}`, {
                                state: {
                                    fileName: file.originalName,
                                },
                            })
                        }
                    >
                        <MessageSquare size={18} />
                        Chat
                    </Button>

                    <Button
                        variant="secondary"
                        className="flex-1 gap-2"
                        onClick={() => onSummary(file)}
                    >
                        <Sparkles size={18} />
                        Summary
                    </Button>

                </div>

                {/* Preview + Download */}

                <div className="flex gap-3">

                    <Button
                        variant="secondary"
                        className="flex-1 gap-2"
                        onClick={() => onPreview(file)}
                    >
                        <Eye size={18} />
                        Preview
                    </Button>

                    <Button
                        variant="secondary"
                        className="flex-1 gap-2"
                        onClick={() => onDownload(file)}
                    >
                        <Download size={18} />
                        Download
                    </Button>

                </div>

                {/* Delete */}

                <Button
                    variant="danger"
                    className="w-full gap-2"
                    onClick={() => onDelete(file.id)}
                >
                    <Trash2 size={18} />
                    Delete
                </Button>

            </div>

        </motion.div>

    );

}

export default DocumentCard;