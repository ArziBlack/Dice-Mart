import React, { ChangeEvent } from "react";

interface InputFieldProps {
  type?: string;
  name: string;
  id?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  name,
  id,
  value,
  placeholder,
  onChange,
  className = "",
  required = false,
  disabled = false,
  readOnly = false,
  autoComplete = "off",
  maxLength,
  minLength,
  pattern,
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      {...props}
    />
  );
};

export default InputField;
