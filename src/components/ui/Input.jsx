import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    onKeyDown,
    disabled = false,
    className = "",
}) {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (

        <div className="relative">

            <input
                type={
                    isPassword
                        ? (showPassword ? "text" : "password")
                        : type
                }
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
                    ${isPassword ? "pr-12" : ""}
                    py-3.5
                    text-white
                    placeholder:text-slate-500
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    ${className}
                `}
            />

            {isPassword && (

                <button
                    type="button"
                    onClick={() =>
                        setShowPassword((previous) => !previous)
                    }
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        hover:text-white
                    "
                >

                    {showPassword ? (
                        <EyeOff size={20} />
                    ) : (
                        <Eye size={20} />
                    )}

                </button>

            )}

        </div>

    );

}

export default Input;