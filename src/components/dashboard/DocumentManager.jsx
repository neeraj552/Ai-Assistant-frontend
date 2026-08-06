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
    searchFiles,
    sortFiles,

} from "../../services/fileService";

import {
    getSummary,
    generateSummary,
} from "../../services/summaryService";

import SummaryModal from "../summary/SummaryModal";
import SummarySkeleton from "../summary/SummarySkeleton";
import SummaryContent from "../summary/SummaryContent"; 
import Input from "../ui/Input";
import { progress } from "framer-motion";
import PdfPreviewModal from "../pdf/PdfPreviewModal";
import { pre } from "framer-motion/m";

function DocumentManager({ onDocumentUploaded }) {

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState([]);
    const [summaryOpen, setSummaryOpen] = useState(false);
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const [selectedSummaryFile, setSelectedSummaryFile] = useState(null);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("NEWEST");
    const [uploadProgress, setUploadProgress] = useState(0);

    const[previewOpen, setPreviewOpen] = useState(false);
    const[previewFile, setPreviewFile] = useState(true);

    useEffect(() => {

    handleSort();

    }, [sortBy]);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            if(search.trim() === ""){
                loadFiles();
            } else {
                handleSearch();
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    async function handleSearch(){
        try{
            const response = await searchFiles(search);
            setFiles(response);
        } catch (error){
            console.error(error);
            toast.error("Search failed.");
        }
    }

    async function handleUpload() {

        if (!selectedFile) {
            toast.error("Please select a PDF first.");
            return;
        }

        try {

            setUploading(true);

            setUploadProgress(0);

            await uploadFile(
                selectedFile,
                (progress) => {
                    setUploadProgress(progress);
                }
            );

            setUploadProgress(100);

            toast.success("Uploaded successfully");

            await loadFiles();

            if (onDocumentUploaded) {
            await onDocumentUploaded();
}

            setSelectedFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

        } catch (error) {

            console.error(error);
            toast.error("Upload failed!");

        } finally {

            setUploading(false);
            setTimeout(() => {
                setUploadProgress(0);
            }, 500);

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

            if (onDocumentUploaded) {
            await onDocumentUploaded();
            }

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

    }

    async function handleSort(){
        try {
            const response = await sortFiles(sortBy);
            setFiles(response);
        } catch (error) {
            console.error(error);
            toast.error("Failed to sort documents.")
        }
    }

    async function handlePreview(file){
        setPreviewFile(file);
        setPreviewOpen(true);
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
                    uploadProgress={uploadProgress}
                    onUpload={handleUpload}
                />

            )}

           <div className="mb-6 flex gap-4">

           <div className="flex-1">

            <Input
            placeholder="🔍 Search documents..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />

            </div>

           <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            text-white
            outline-none
           "
           >

        <option value="NEWEST">Newest</option>
        <option value="OLDEST">Oldest</option>
        <option value="NAME_ASC">Name (A-Z)</option>
        <option value="NAME_DESC">Name (Z-A)</option>
        <option value="SIZE_ASC">Smallest</option>
        <option value="SIZE_DESC">Largest</option>

           </select>

            </div>

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
                            onPreview={handlePreview}
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

            <PdfPreviewModal
            open={previewOpen}
            fileId={previewFile?.id}
            fileName={previewFile?.originalName}
            onClose={() => setPreviewOpen(false)}
        
           />

        </div>

        

    );

}

export default DocumentManager;