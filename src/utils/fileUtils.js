 export const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

export const formatUploadDate = (dateString) => {

    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(dateString));

};

export const getStatusVariant = (status) => {

    switch (status) {

        case "UPLOADED":
            return "success";

        case "PROCESSING":
            return "warning";

        case "FAILED":
            return "danger";

        default:
            return "secondary";
    }

};

export const formatStatus = (status) => {
    return status.charAt(0) + status.slice(1).toLowerCase();
};