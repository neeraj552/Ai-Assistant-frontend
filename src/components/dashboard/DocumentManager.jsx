import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast";

import UploadCard from "./UploadCard";
import SelectedFileCard from "./SelectedFileCard";
import DocumentCard from "./DocumentCard";
import EmptyState from "./EmptyState";

import {
    uploadFile,
    getFiles,
    downloadFile,
    deleteFile,
} from "../../services/fileService";

import {
    getSummary,
    generateSummary,
} from "../../services/summaryService";

import SummaryModal from "../summary/SummaryModal";
import SummarySkeleton from "../summary/SummarySkeleton";
import SummaryContent from "../summary/SummaryContent"; 

function DocumentManager() {

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState([]);
    const [summaryOpen, setSummaryOpen] = useState(false);
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const [selectedSummaryFile, setSelectedSummaryFile] = useState(null);

    useEffect(() => {
        loadFiles();
    }, []);

    async function loadFiles() {
        try {
            const response = await getFiles();
            setFiles(response);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load documents.");
        }
    }

    async function handleUpload() {

        if (!selectedFile) {
            toast.error("Please select a PDF first.");
            return;
        }

        try {

            setUploading(true);

            await uploadFile(selectedFile);

            toast.success("Uploaded successfully");

            await loadFiles();

            setSelectedFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

        } catch (error) {

            console.error(error);
            toast.error("Upload failed!");

        } finally {

            setUploading(false);

        }

    }

    async function handleDownload(file) {

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
            toast.error("Download failed.");

        }

    }

    async function handleDelete(id) {

        try {

            await deleteFile(id);

            setFiles((previousFiles) =>
                previousFiles.filter((file) => file.id !== id)
            );

            toast.success("Deleted successfully");

        } catch (error) {

            console.error(error);
            toast.error("Failed to delete document.");

        }

    }

    async function handleSummary(file){
        setSummaryOpen(true);
        setSummaryLoading(true);
        setSelectedSummaryFile(file);

        try{
            let summary;
            try{
                summary = await getSummary(file.id);
            } catch {
                summary = await generateSummary(file.id);
            }
            setSelectedSummary(summary);
        } catch (error){
            console.error(error);
            toast.error("Failed to generate summary");
            setSummaryOpen(false);
        }finally{
            setSummaryLoading(false)
        }
    }

    function handleChat(file) {
        console.log(file);

        // Later:
        // navigate(`/chat/${file.id}`);
    }

    return (

        <div className="space-y-8">

            <UploadCard
                inputRef={fileInputRef}
                onSelect={(event) => {

                    const file = event.target.files[0];

                    if (file) {
                        setSelectedFile(file);
                    }

                }}
            />

            {selectedFile && (

                <SelectedFileCard
                    file={selectedFile}
                    uploading={uploading}
                    onUpload={handleUpload}
                />

            )}

            {files.length === 0 ? (

                <EmptyState />

            ) : (

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {files.map((file) => (

                        <DocumentCard
                            key={file.id}
                            file={file}
                            onDownload={handleDownload}
                            onDelete={handleDelete}
                            onChat={handleChat}
                            onSummary={handleSummary}
                        />

                    ))}

                </div>

            )}
            <SummaryModal
            open = {summaryOpen}
            onClose={() => setSummaryOpen(false)}
            >
                {summaryLoading ? (
                    <SummarySkeleton/>

                ):(

                    <SummaryContent
                      fileName={selectedSummaryFile?.originalName}
                      summary={selectedSummary}
                      onClose={() => setSummaryOpen(false)}
                      />
                )}

            </SummaryModal>

        </div>

    );

}

export default DocumentManager;