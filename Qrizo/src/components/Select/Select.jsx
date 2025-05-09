import React from "react";

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-2 w-full">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <select
        className="w-full p-2 border rounded-md bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
