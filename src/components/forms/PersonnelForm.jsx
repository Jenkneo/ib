import React, { useState, useEffect, useCallback } from 'react';

function PersonnelForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    securitySpecialists: 0,
    administrators: 0,
    consultants: 0,
    salarySpecialist: 0,
    salaryAdmin: 0,
    salaryConsultant: 0,
    months: 12
  });

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;
    
    const total = 
      (formData.securitySpecialists * formData.salarySpecialist * formData.months) +
      (formData.administrators * formData.salaryAdmin * formData.months) +
      (formData.consultants * formData.salaryConsultant * formData.months);
    
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

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          Включить расчет затрат на персонал
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <div className="form-section">
            <h4>Специалисты по безопасности</h4>
            <div className="form-group">
              <label>Количество специалистов по безопасности:</label>
              <input
                type="number"
                name="securitySpecialists"
                value={formData.securitySpecialists}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Зарплата специалиста по безопасности (руб/мес):</label>
              <input
                type="number"
                name="salarySpecialist"
                value={formData.salarySpecialist}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Системные администраторы</h4>
            <div className="form-group">
              <label>Количество системных администраторов:</label>
              <input
                type="number"
                name="administrators"
                value={formData.administrators}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Зарплата системного администратора (руб/мес):</label>
              <input
                type="number"
                name="salaryAdmin"
                value={formData.salaryAdmin}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Консультанты</h4>
            <div className="form-group">
              <label>Количество консультантов:</label>
              <input
                type="number"
                name="consultants"
                value={formData.consultants}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Зарплата консультанта (руб/мес):</label>
              <input
                type="number"
                name="salaryConsultant"
                value={formData.salaryConsultant}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Период расчета</h4>
            <div className="form-group">
              <label>Период расчета (месяцев):</label>
              <input
                type="number"
                name="months"
                value={formData.months}
                onChange={handleChange}
                min="1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonnelForm;