import { useMemo } from "react";

function TextAreaField({
  label,
  placeholder,
  register,
  name,
  watch,
}) {
  const value = watch(name) || "";

  const remaining = useMemo(() => {
    return 250 - value.length;
  }, [value]);

  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <label className="font-semibold text-gray-700">
          {label}
        </label>

        <span
          className={`text-sm ${
            remaining < 30
              ? "text-red-500"
              : "text-gray-400"
          }`}
        >
          {remaining} characters left
        </span>

      </div>

      <textarea
        rows={5}
        maxLength={250}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-xl border border-gray-300 p-4 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none resize-none"
      />

    </div>
  );
}

export default TextAreaField;