import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  loadingText="Loading..",
  className = "",
}) {

  const baseStyle = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-6
    py-3.5
    font-semibold
    transition-all
    duration-300
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-blue-500
      to-violet-500
      text-white
      hover:-translate-y-0.5
      hover:shadow-xl
      hover:shadow-blue-500/25
    `,
    secondary: `
      bg-slate-700
      text-white
      hover:bg-slate-600
    `,
    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
     {loading ? (
        <>
          <Loader2
            size={18}
            className="animate-spin"
          />
          <span className="ml-2">
            {loadingText}
          </span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;