import React from "react";

const LoginInputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="polje"
      required
    />
  );
};

export default LoginInputField;