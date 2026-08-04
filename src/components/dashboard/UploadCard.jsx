import { UploadCloud } from "lucide-react"
import { motion } from "framer-motion"
function UploadCard({
    selectedFile,
    onSelect,
    onUpload,
    uploading,
    inputRef
}){

    return (

        <motion.div
        whileHover={{
            scale:1.01,
        }}
        className="
            mb-10
            rounded-3xl
            border-2
            border-dashed
            border-slate-900/70
            backdrop-blur-xl
            p-12
            text-center
            transition-all
            hover:border-blue-500
            hover:shadow-2xl
            hover:shadow-blue-500/10
            cursor-pointer
        "
        onClick={()=> inputRef.current.click()}
        >
        <UploadCloud
        size={60}
        className="mx-auto text-blue-400"
        />

        <h2 className="mt-6 text-2xl font-bold">

            Drag & Drop your PDF 

        </h2>

        <p className="mt-3 text-slate-400">
        or click here to browse your computer    
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
    )

}
export default UploadCard;