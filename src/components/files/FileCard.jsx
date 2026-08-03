import Button from "../ui/Button";
import { formatFileSize } from "../../utils/fileUtils";
import { formatUploadDate } from "../../utils/fileUtils";
import { getStatusVariant } from "../../utils/fileUtils";
import { formatStatus } from "../../utils/fileUtils";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import Badge from "../ui/Badge";
function FileCard ({ file, onDownload, onDelete}) {

    const navigate = useNavigate();

    console.log("FileCard received:", file);
    return (
        <div className=" border rounded-xl p-4 shadow-sm hover:shadow-md transition mb-4 bg-white">
            <h3 className="text-lg font-semibold">
                {file.originalName}
            </h3>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>
                    <Badge variant={getStatusVariant(file.status)}>
                     {formatStatus(file.status)}
                    </Badge>
                </p>

                <p>
                    <strong>Size:</strong> {formatFileSize(file.fileSize)}
                </p>

                <p>
                    <strong>Uploaded:</strong> {formatUploadDate(file.uploadedAt)}
                </p>
          
                <div className="flex justify-end gap-2 mt-4">
                    <Button
                       variant="primary"
                       onClick={() =>
                       navigate(`/chat/${file.id}`, {
                       state: {
                       fileName: file.originalName
                       }
                       })
                       }
                    >
                    <MessageSquare size={18} />
                    Chat
                    </Button>
                    
                    <Button variant="secondary"
                            onClick={() => onDownload(file)}
                    >
                        Download
                    </Button>

                    <Button 
                    variant="danger"
                    onClick={() => onDelete(file.id)}
                    >
                        Delete
                    </Button>
                </div>

            </div>

        </div>
    );
}

export default FileCard;