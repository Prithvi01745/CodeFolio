function InputField({
  label,
  placeholder,
  type = "text",
  register,
  name,
  required = false,
  errors,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: required ? `${label} is required` : false,
        })}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-200
        ${
          errors?.[name]
            ? "border-red-500 focus:ring-2 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        }`}
      />

      {errors?.[name] && (
        <p className="text-sm text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default InputField;