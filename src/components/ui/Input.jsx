function Input({
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        p-3
        border
        border-gray-300
        rounded-lg
        text-base
        focus:outline-none
        focus:border-blue-500
      "
    />
  );
}

export default Input;