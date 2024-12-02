import React, { useState, useCallback } from 'react';
import { saveAs } from 'file-saver';
import HardwareForm from './forms/HardwareForm';
import SoftwareForm from './forms/SoftwareForm';
import PersonnelForm from './forms/PersonnelForm';

function Calculator() {
  const [enabledForms, setEnabledForms] = useState({
    hardware: false,
    software: false,
    personnel: false,
  });

  const [calculations, setCalculations] = useState({
    hardware: 0,
    software: 0,
    personnel: 0,
  });

  const handleFormToggle = (formName) => {
    setEnabledForms((prev) => ({
      ...prev,
      [formName]: !prev[formName],
    }));
  };

  const handleCalculationUpdate = useCallback((type, value) => {
    setCalculations((prev) => {
      if (prev[type] === value) return prev; // Избегаем лишнего обновления
      return { ...prev, [type]: value };
    });
  }, []);

  const downloadCalculations = () => {
    const enabledCalculations = Object.entries(calculations)
      .filter(([key]) => enabledForms[key])
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const total = Object.values(enabledCalculations).reduce(
      (sum, value) => sum + value,
      0
    );

    const content = `# Расчет стоимости защиты информации

## Общая стоимость: ${total.toLocaleString()} руб.

### Детализация расходов:
${enabledForms.hardware ? `- Аппаратное обеспечение: ${calculations.hardware.toLocaleString()} руб.\n` : ''}
${enabledForms.software ? `- Программное обеспечение: ${calculations.software.toLocaleString()} руб.\n` : ''}
${enabledForms.personnel ? `- Персонал: ${calculations.personnel.toLocaleString()} руб.\n` : ''}
Дата расчета: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'security-calculations.md');
  };

  const hasActiveCalculations = Object.entries(calculations).some(
    ([key, value]) => enabledForms[key] && value > 0
  );

  return (
    <div>
      <h2 className="form-title">Расчет стоимости защиты информации</h2>

      <div className="form-toggle-container">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={enabledForms.hardware}
            onChange={() => handleFormToggle('hardware')}
          />
          Включить расчет аппаратного обеспечения
        </label>
      </div>
      {enabledForms.hardware && (
        <HardwareForm
          onCalculate={(value) => handleCalculationUpdate('hardware', value)}
        />
      )}

      <div className="form-toggle-container">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={enabledForms.software}
            onChange={() => handleFormToggle('software')}
          />
          Включить расчет программного обеспечения
        </label>
      </div>
      {enabledForms.software && (
        <SoftwareForm
          onCalculate={(value) => handleCalculationUpdate('software', value)}
        />
      )}

      <div className="form-toggle-container">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={enabledForms.personnel}
            onChange={() => handleFormToggle('personnel')}
          />
          Включить расчет затрат на персонал
        </label>
      </div>
      {enabledForms.personnel && (
        <PersonnelForm
          onCalculate={(value) => handleCalculationUpdate('personnel', value)}
        />
      )}

      {hasActiveCalculations && (
        <div className="total-section">
          <div className="total-amount">
            <strong>
              Общая стоимость:{' '}
              {Object.entries(calculations)
                .filter(([key]) => enabledForms[key])
                .reduce((sum, [_, value]) => sum + value, 0)
                .toLocaleString()}{' '}
              руб.
            </strong>
          </div>
          <button className="download-btn" onClick={downloadCalculations}>
            Скачать расчеты
          </button>
        </div>
      )}
    </div>
  );
}

export default Calculator;
