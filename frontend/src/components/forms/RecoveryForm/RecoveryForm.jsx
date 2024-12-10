import React, { useState, useEffect, useCallback } from 'react';
import Select from 'react-select';

function HardwareForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    singleLossSum: '',
    operationalRisk: '',
  });

  const singleLossSums = [
    { value: 'high', label: '> 10 500 000,00' },
    { value: 'aboveAverage', label: '800 001,00 - 10 500 000,00' },
    { value: 'average', label: '100 001,00 - 800 000,00' },
    { value: 'belowAverage', label: '50 001,00 - 100 000,00' },
    { value: 'little', label: '0,00 - 50 000,00' }
  ];

  const operationalRisks = [
    { value: 'daily', label: 'Ежедневно' },
    { value: 'everyWeek', label: 'Еженедельно' },
    { value: 'everyQuarter', label: 'Ежеквартально' },
    { value: 'everyYear', label: 'Ежегодно' },
    { value: 'lessThanTwoYear', label: 'Раз в два года и реже' }
  ];

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let total = 0

    onCalculate(total);
  }, [formData, isEnabled, onCalculate]); // eslint-disable-line

  useEffect(() => {
    if (isEnabled) {
      calculateTotal();
    } else {
      onCalculate(0);
    }
  }, [isEnabled, calculateTotal, onCalculate]); 

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption.value
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
          <h3>Определение коэффициента существенности потерь</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <div className="form-section">
            <h4>Определите сумму потерь при единоразовой реализации операционного риска, руб</h4>
            <div className="form-group">
              <Select
                options={singleLossSums}
                value={singleLossSums.find(type => type.value === formData.singleLossSum)}
                onChange={(option) => handleSelectChange(option, { name: 'singleLossSumType' })}
                className="react-select"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Определение коэффициента вероятности возникновения операционного риска</h4>
            <div className="form-group">
              <Select
                options={operationalRisks}
                value={operationalRisks.find(type => type.value === formData.operationalRisk)}
                onChange={(option) => handleSelectChange(option, { name: 'operationalRiskType' })}
                className="react-select"
              />
            </div>
          </div>
          <div>
            <h3>Результаты оценки:</h3>
            пока не работают
          </div>
        </div>
      )}
    </div>
  );
}

export default HardwareForm;