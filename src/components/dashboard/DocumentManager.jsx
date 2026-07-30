import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import FileList from "../files/FileList";
import {
    uploadFile,
    getFiles,
    downloadFile,
    deleteFile,
} from "../../services/fileService";

function DocumentManager() {
    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        loadFiles();
    }, []);

    const loadFiles = async () => {
        try {
            const response = await getFiles();
            setFiles(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a PDF first.");
            return;
        }

        try {
            setUploading(true);

            const uploadedFile = await uploadFile(selectedFile);

            console.log(uploadedFile);

            alert("File uploaded successfully!");

            // Add new file without reloading
            await loadFiles();

            setSelectedFile(null);
            fileInputRef.current.value = "";

        } catch (error) {
            console.error(error);
            alert("Upload failed.");
        } finally {
            setUploading(false);
        }
    };

    const handleDownload = async (file) => {
        try {
            const response = await downloadFile(file.id);

            const url = window.URL.createObjectURL(response.data);

            const link = document.createElement("a");

            link.href = url;
            link.download = file.originalName;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteFile(id);

            setFiles((previousFiles) =>
                previousFiles.filter((file) => file.id !== id)
            );

            console.log("Deleted successfully");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
                My Documents
            </h2>

            <Button
                variant="secondary"
                onClick={() => fileInputRef.current.click()}
                className="mb-2"
            >
                Select PDF
            </Button>

            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(event) => {
                    const file = event.target.files[0];

                    if (file) {
                        setSelectedFile(file);
                    }
                }}
            />

            {selectedFile && (
                <p className="mt-2 mb-4 text-sm text-gray-600">
                    Selected File:{" "}
                    <span className="font-medium">
                        {selectedFile.name}
                    </span>
                </p>
            )}

            {selectedFile && (
                <div className="mb-6">
                    <Button onClick={handleUpload}>
                        {uploading ? "Uploading..." : "Upload"}
                    </Button>
                </div>
            )}

            <div className="border rounded-lg p-6 max-h-96 overflow-y-auto">
                <FileList
                    files={files}
                    onDownload={handleDownload}
                    onDelete={handleDelete}
                />
            </div>

        </div>
    );
}

export default DocumentManager;