import React from "react";

const Input = ({ type, id, label, value, onChange, required, min }) => {
  return (
    <div className={`w-[327px] mt-4`}>
      <label
        className="flex items-center gap-1 text-[#8EA6BF] text-sm leading-[18px]"
        htmlFor={id}
      >
        {label}
        {required && !value && <span className="text-red-500 text-base">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
  );
};

export default Input;
