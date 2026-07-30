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
                p-3
                border
                border-gray-300
                rounded-lg
                text-base
                focus:outline-none
                focus:border-blue-500
                ${className}
            `}
        />
    );
}

export default Input;