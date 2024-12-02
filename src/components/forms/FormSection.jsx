import React from 'react';

const FormSection = ({
  title,
  checkboxName,
  isChecked,
  onCheckboxChange,
  fields,
  onFieldChange,
}) => {
  return (
    <div className="form-section">
      <div className="checkbox-group">
        <label className="toggle-label">
          <input
            type="checkbox"
            name={checkboxName}
            checked={isChecked}
            onChange={onCheckboxChange}
          />
          <h4>{title}</h4>
        </label>
      </div>

      {isChecked && (
        <div>
          {fields.map((field, index) => (
            <div className="form-group" key={index}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={onFieldChange}
                min={field.min || undefined}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSection;
