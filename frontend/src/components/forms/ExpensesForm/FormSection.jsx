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
  const defaultSummaryName =  fields.length === 3 || fields.length === 1 ? 'Общая стоимость' : 
                              fields.length === 6 ? 'Электричество' : 'Стоимость обучения';
  
  const defaultSummary =  fields.length === 3 ? fields[0].value + (fields[1].value * fields[2].value) :
                          fields.length === 6 ? (fields[2].value * 365) + (fields[5].value * electricityCost) : 
                          fields.length === 2 ? fields[0].value * fields[1].value :
                          fields[0].value

  const hardwareSummaryName = 'Стоимость установки и настройки'

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
            {defaultSummaryName}: {defaultSummary}
          {fields.length === 6 && (
            <div>
              <span>{hardwareSummaryName}: {fields[3].value * fields[4].value}</span>
              <h4>Общая стоимость:  {defaultSummary + (fields[3].value * fields[4].value)}</h4>
            </div>
          )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSection;
