import React, { useState } from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark transition-all"
          placeholder={placeholder}
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            aria-label="Toggle password visibility"
            aria-expanded={showPassword}
            aria-controls={name}
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer"
          >
            {showPassword ? (
              <i className="ri-eye-off-line" />
            ) : (
              <i className="ri-eye-line" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
