import FileCard from "./FileCard";
function FileList({ files, onDownload, onDelete }) {
    return (
        <div>
            {files.map((file) => (
                <FileCard
                    key={file.id}
                    file={file}
                    onDownload={onDownload}
                    onDelete = {onDelete}
                />
            ))}
        </div>
    );
}
export default FileList;