function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    onKeyDown,
    disabled = false,
    className = ""
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            className={`
               w-full
               rounded-xl
               border
               border-slate-700
               bg-slate-800/70
               px-4
               py-3.5
               text-white
               placeholder:text-slate-500
               transition-all
               duration-300
               focus:outline-none
               focus:border-blue-500
               focus:ring-4
               focus:ring-blue-500/20 
               disabled:opacity-50
               disabled:cursor-not-allowed 
                ${className}
            `}
        />
    );
}

export default Input;