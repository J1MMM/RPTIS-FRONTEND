import React from "react";

function LabeledInput({ label, className }) {
  return (
    <div className={`labeled-input ${className}`}>
      <label className="label">{label}</label>
      <input />
    </div>
  );
}

export default LabeledInput;
