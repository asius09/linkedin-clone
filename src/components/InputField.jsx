import React, { useState, useId, forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      placeholder,
      required = false,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const id = useId();

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className={`input-container ${className}`}>
        {label && (
          <label
            id={id}
            htmlFor={name}
            className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={type === "password" && !showPassword ? "password" : "text"}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark transition-all"
            placeholder={placeholder}
            required={required}
            {...inputProps}
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
  }
);

export default InputField;
