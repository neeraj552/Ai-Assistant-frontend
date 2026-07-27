function FileSelector({ selectedFile, onChangeDocument }) {
    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div>
                {selectedFile ? selectedFile.name : "No document selected"}
            </div>

            <button
                onClick={onChangeDocument}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Change Document
            </button>
        </div>
    );
}
export default FileSelector;