import React from 'react';

/**
 * FormField component renders a labeled input field with optional features.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.labelName - The label text for the input field.
 * @param {string} props.type - The type of the input field (e.g., text, password).
 * @param {string} props.name - The name attribute of the input field.
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.handleChange - Function to handle changes in the input field.
 * @param {boolean} [props.isSurpriseMe] - Optional flag to show a "Surprise Me!" button.
 * @param {Function} [props.handleSurpriseMe] - Function to handle the "Surprise Me!" button click.
 */
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe
}) => (
  <div>
    {/* Container for the label and optional "Surprise Me!" button */}
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise Me!
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder-gray-500 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
    />
  </div>
);

export default FormField;
