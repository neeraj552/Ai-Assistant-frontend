function PromptSuggestions({ promptType, onSelect }) {

    const suggestions = {

        CHAT: [
            "Summarize this document",
            "What are the key points?",
            "Explain the main concepts",
            "Give me a quick overview",
        ],

        EXPLAIN: [
            "Explain this like I'm a beginner",
            "Explain step by step",
            "Explain with an example",
            "Explain the architecture",
        ],

        INTERVIEW: [
            "Generate beginner interview questions",
            "Generate advanced interview questions",
            "Ask Spring Boot interview questions",
            "Generate MCQs",
        ],

        REVISION: [
            "Create revision notes",
            "Create a cheat sheet",
            "Give me important concepts",
            "Quick revision",
        ],

    };

    return (

        <div className="mb-6 flex flex-wrap gap-3">

            {suggestions[promptType].map((text) => (

                <button
                    key={text}
                    onClick={() => onSelect(text)}
                    className="
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-800
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                        transition-all
                        hover:border-blue-500
                        hover:bg-blue-500/10
                        hover:text-white
                    "
                >
                    {text}
                </button>

            ))}

        </div>

    );

}

export default PromptSuggestions;