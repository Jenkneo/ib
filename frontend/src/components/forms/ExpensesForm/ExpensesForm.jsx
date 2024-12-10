import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import { 
  softwareSections, softwareVariables,
  hardwareSections, hardwareVariables,
  cyberAttackSections, cyberAttackVariables, 
  courseSections, courseVariables
} from './sections';


function ExpensesForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    ...softwareVariables,
    electricityCost: 0,
    ...hardwareVariables,
    ...cyberAttackVariables,
    ...courseVariables,
  });

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let currentInput = false;
    let currentPrice = 0;
    let currentPeriod = 0;
    let currentWorkerSalary = 0;
    
    const total = Object.entries(formData).reduce((acc, [key, value]) => {
      if (key.startsWith('has')) {
        currentInput = value
        currentPrice = 0;
        currentPeriod = 0;
        currentWorkerSalary = 0;
      }
      if (currentInput) {
        if (key.toLowerCase().includes('price')) currentPrice = value;
        if (key.toLowerCase().includes('period')) currentPeriod = value;
        if (key.toLowerCase().includes('workersalary')) currentWorkerSalary = value;
      }
      if (key.toLowerCase().includes('workersalary')) {
        return acc + currentPrice + (currentPeriod * currentWorkerSalary);
      }
      return acc
    }, 0);
    
    onCalculate(total);
  }, [formData, isEnabled, onCalculate]);

  useEffect(() => {
    if (isEnabled) {
      calculateTotal();
    } else {
      onCalculate(0);
    }
  }, [isEnabled, calculateTotal, onCalculate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleBoolChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <h3>Информация о расходах</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <h3 className='form-title'>Расходы на программное обеспечение для информационной безопасности</h3>
          {softwareSections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}

          <h3 className='form-title'>Расходы на офисное ЭВО</h3>
          <div className="form-group">
            <label>Стоимость электричества:</label>
            <input
              type="number"
              name="electricityCost"
              value={formData.electricityCost}
              onChange={handleChange}
              min="0"
            />
          </div>

          {hardwareSections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}

          <h3 className='form-title'>Расходы на обучение специалистов по информационной безопасности</h3>
          {courseSections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}

          <h3 className='form-title'>Потенциальные убытки от кибератак</h3>
          {cyberAttackSections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpensesForm;