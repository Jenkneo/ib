import React from 'react';

const FormSection = ({
  title,
  checkboxName,
  isChecked,
  onCheckboxChange,
  fields,
  onFieldChange,
  electricityCost = null,
}) => {
  let electricity = 0
  let installation = 0
  let price = 0
  
  if (fields.length === 5) {
    electricity = (fields[1].value * 248) + (fields[4].value * electricityCost)
    installation = fields[2].value * fields[3].value
    price = fields[0].value
  }

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
        <div>
          {fields.length === 5 && (
            <div>
              <div>Электричество: {electricity}</div>
              <div>Стоимость установки и настройки: {installation}</div>
              <h4>Общая стоимость: {electricity + installation + price}</h4>
            </div>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSection;
