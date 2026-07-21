function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;