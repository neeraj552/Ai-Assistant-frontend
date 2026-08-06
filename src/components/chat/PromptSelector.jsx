import {
    HiOutlineChatBubbleLeftRight,
    HiOutlineLightBulb,
    HiOutlineAcademicCap,
    HiOutlineBookOpen,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
} from "react-icons/hi2";

function PromptSelector({
    promptType,
    onChange,
    onToggle,
    showSuggestions,
}) {

    const prompts = [
        {
            label: "Chat",
            value: "CHAT",
            icon: HiOutlineChatBubbleLeftRight,
        },
        {
            label: "Explain",
            value: "EXPLAIN",
            icon: HiOutlineLightBulb,
        },
        {
            label: "Interview",
            value: "INTERVIEW",
            icon: HiOutlineAcademicCap,
        },
        {
            label: "Revision",
            value: "REVISION",
            icon: HiOutlineBookOpen,
        },
    ];

    return (

        <div className="mb-1">

            <p className="mb-1 text-sm text-slate-500">
                Choose how you want the AI to help.
            </p>

            <div className="flex flex-wrap gap-2">

                {prompts.map((prompt) => {

                    const Icon = prompt.icon;
                    const active = promptType === prompt.value;

                    return (

                        <button
                            key={prompt.value}
                            onClick={() => onChange(prompt.value)}
                            className={`
                                flex
                                min-w-[150px]
                                items-center
                                justify-between
                                gap-2
                                rounded-lg
                                border
                                px-4
                                py-2
                                text-[13px]
                                font-medium
                                transition-all
                                duration-200
                                ${
                                    active
                                        ? `
                                            border-blue-500
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-violet-600
                                            text-white
                                            shadow-md
                                            shadow-blue-500/20
                                        `
                                        : `
                                            border-slate-700
                                            bg-slate-900
                                            text-slate-300
                                            hover:border-blue-500/40
                                            hover:bg-slate-800
                                            hover:text-white
                                        `
                                }
                            `}
                        >

                            <div className="flex items-center gap-2">

                                <Icon size={16} />

                                <span>
                                    {prompt.label}
                                </span>

                            </div>

                            {active && (

                                <button
                                    type="button"
                                    onClick={(event) => {

                                        event.stopPropagation();

                                        onToggle();

                                    }}
                                    className="
                                        rounded-full
                                        p-0.5
                                        transition
                                        hover:bg-white/10
                                    "
                                >

                                    {showSuggestions ? (

                                        <HiOutlineChevronUp size={16} />

                                    ) : (

                                        <HiOutlineChevronDown size={16} />

                                    )}

                                </button>

                            )}

                        </button>

                    );

                })}

            </div>

        </div>

    );

}

export default PromptSelector;