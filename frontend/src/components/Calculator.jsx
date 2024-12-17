import React, { useState, useCallback } from 'react';
import { saveAs } from 'file-saver';
import ExpensesForm from './forms/ExpensesForm/ExpensesForm';
// import HardwareForm from './forms/HardwareForm';
import OrganizationInfoForm from './forms/OrganizationInfoForm/OrganizationInfoForm';
import FeasibilityForm from './forms/FeasibilityForm/FeasibilityForm';

function Calculator() {
  const [calculations, setCalculations] = useState({
    hardware: 0,
    software: 0,
    personnel: 0,
  });
  const [data, setData] = useState("");

  const handleCalculationUpdate = useCallback((type, value) => {
    setCalculations((prev) => {
      if (prev[type] === value) return prev; // Избегаем лишнего обновления
      return { ...prev, [type]: value };
    });
  }, []);

  const downloadCalculations = () => {
    const enabledCalculations = Object.entries(calculations)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const total = Object.values(enabledCalculations).reduce(
      (sum, value) => sum + value,
      0
    );

    const content = `
        # Расчет стоимости защиты информации
        ## Общая стоимость: ${total.toLocaleString()} руб.

        ### Детализация расходов:
        - Аппаратное обеспечение: ${calculations.hardware.toLocaleString()} руб.\n
        - Программное обеспечение: ${calculations.software.toLocaleString()} руб.\n
        - Персонал: ${calculations.personnel.toLocaleString()} руб.\n
        Дата расчета: ${new Date().toLocaleDateString()}
        `;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'security-calculations.md');
  };

  return (
    <div>
      <h2 className="form-title">Экономика защиты информации</h2>

      <OrganizationInfoForm
        onCalculate={(value) => handleCalculationUpdate('personnel', value)}
      />
      <ExpensesForm
        onCalculate={(value) => handleCalculationUpdate('personnel', value)}
        onDataChange={setData}
      />
      <FeasibilityForm
        onCalculate={(value) => handleCalculationUpdate('personnel', value)}
        receivedData={data}
      />
      {/* <HardwareForm
        onCalculate={(value) => handleCalculationUpdate('hardware', value)}
      /> */}

      <div className="total-section">
        <div className="total-amount">
          <strong>
            Общая стоимость:{' '}
            {Object.entries(calculations)
              .reduce((sum, [_, value]) => sum + value, 0)
              .toLocaleString()}{' '}
            руб.
          </strong>
        </div>
        <button className="download-btn" onClick={downloadCalculations}>
          Скачать расчеты
        </button>
      </div>
    </div>
  );
}

export default Calculator;
