
import Button from "../ui/Button";
import { useRef, useState } from "react";
import { uploadFile } from "../../services/fileService";

function FileModal({ onClose }) {

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
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

        setSelectedFile(null);
        fileInputRef.current.value = "";

    } catch (error) {

        console.error(error);
        alert("Upload failed.");

    } finally {

        setUploading(false);

    }
};
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            My Documents
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Upload Button */}
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

            if(file){
                setSelectedFile(file);
            }
           }}
           />
           {selectedFile && (
              <p className="mt-2 mb-4 text-sm text-gray-600">
                 Selected File: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}

            {selectedFile && (
              <div className="mt-3 mb-2">

              <Button
              onClick={handleUpload}
              >
              {uploading ? "Uploading..." : "Upload"}
            </Button>

      </div>
)}

        {/* Document List */}
        <div className="border rounded-lg p-10 text-center text-gray-500">
          No documents found.
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
}

export default FileModal;