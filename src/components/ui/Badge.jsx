function Badge({
    children,
    variant = "primary",
    className = "",
}) {

    const variants = {

        primary: `
            bg-blue-500/15
            text-blue-400
            border
            border-blue-500/20
        `,

        secondary: `
            bg-slate-800
            text-slate-300
            border
            border-slate-700
        `,

        success: `
            bg-emerald-500/15
            text-emerald-400
            border
            border-emerald-500/20
        `,

        warning: `
            bg-yellow-500/15
            text-yellow-400
            border
            border-yellow-500/20
        `,

        danger: `
            bg-red-500/15
            text-red-400
            border
            border-red-500/20
        `,

    };

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                backdrop-blur-sm
                ${variants[variant] ?? variants.primary}
                ${className}
            `}
        >
            {children}
        </span>

    );

}

export default Badge;