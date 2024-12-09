import React, { useState, useCallback } from 'react';
import Select from 'react-select';

function ExpensesForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    organizationName: '',
    industryType: '',
    annualBudget: 0,
    securityBudget: 0,
    organizationSize: 'small'
  });

  const organizationSizes = [
    { value: 'small', label: 'Маленький' },
    { value: 'medium', label: 'Средний' },
    { value: 'large', label: 'Большой' }
  ];

  // Потом надо будет подвязать
  // eslint-disable-next-line
  const calculateTotal = useCallback(() => {
    // if (!isEnabled) return;
    
    const total = Object.entries(formData).reduce((acc, [key, value]) => {
      return acc + value
    }, 0);
    
    onCalculate(total);
  }, [formData, onCalculate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSizeChange = (selectedOption) => {
    setFormData(prev => ({
      ...prev,
      organizationSize: selectedOption.value
    }));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <h3>Информация об организации</h3>
        </label>
      </div>

      <div className="form-content">
        <div className="form-group">
          <label>Название организации:</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Тип отрасли:</label>
          <input
            type="text"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Годовой бюджет организации (руб):</label>
          <input
            type="number"
            name="annualBudget"
            value={formData.annualBudget}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Бюджет на информационную безопасность (руб):</label>
          <input
            type="number"
            name="securityBudget"
            value={formData.securityBudget}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Размер организации:</label>
          <Select
            value={organizationSizes.find(size => size.value === formData.organizationSize)}
            onChange={handleSizeChange}
            options={organizationSizes}
            className="react-select"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpensesForm;