import React, { useState, useEffect, useCallback } from 'react';

function HardwareForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    initialCost: 0,
    operationalExpenses: 0,
    maintenanceCosts: 0,
    otherExpenses: 0,
    exploitationPeriod: 0
  });

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let total = 0;

    onCalculate(total);
  }, [formData, isEnabled, onCalculate]); // eslint-disable-line

  useEffect(() => {
    if (isEnabled) {
      calculateTotal();
    } else {
      onCalculate(0);
    }
  }, [isEnabled, calculateTotal, onCalculate]);

  const handleChange = (e) => {
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
          <h3>Совокупная стоимость владения (ТСО)</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">

          <div className="form-section">
            <h4>Данные для определения совокупной стоимости владения TCO</h4>
            
            <div className="form-group">
              <label>Начальная стоимость:</label>
              <input
                type="number"
                name="initialCost"
                value={formData.initialCost}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Операционные расходы за срок эксплуатации:</label>
              <input
                type="number"
                name="operationalExpenses"
                value={formData.operationalExpenses}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Затраты на обслуживание и поддержку:</label>
              <input
                type="number"
                name="maintenanceCosts"
                value={formData.maintenanceCosts}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Прочие затраты:</label>
              <input
                type="number"
                name="otherExpenses"
                value={formData.otherExpenses}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Срок эксплуатации:</label>
              <input
                type="number"
                name="exploitationPeriod"
                value={formData.exploitationPeriod}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HardwareForm;