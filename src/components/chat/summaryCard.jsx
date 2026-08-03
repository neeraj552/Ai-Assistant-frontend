import Button from "../ui/Button";
import { FileText, Sparkles } from "lucide-react";

function SummaryCard({ summary, loading, onGenerate }) {

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-blue-500" size={22} />
                    <h2 className="text-lg font-semibold">
                        Generating Summary...
                    </h2>
                </div>

                <p className="text-gray-500 animate-pulse">
                    AI is reading your document...
                </p>
            </div>
        );
    }

    if (!summary) {
        return (
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Document Summary
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Generate an AI-powered summary of this document.
                    </p>
                </div>

                <Button
                    variant="primary"
                    onClick={onGenerate}
                >
                    <Sparkles size={18} />
                    Generate Summary
                </Button>

            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">

            <div className="flex items-center gap-2 mb-4">
                <FileText className="text-blue-500" size={22} />
                <h2 className="text-lg font-semibold">
                    Document Summary
                </h2>
            </div>

            <p className="whitespace-pre-wrap text-gray-700 leading-7">
                {summary.summary}
            </p>

        </div>
    );
}

export default SummaryCard;