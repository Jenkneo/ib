import React, { useState } from 'react';

function PersonnelForm() {
  const [formData, setFormData] = useState({
    securitySpecialists: 0,
    administrators: 0,
    consultants: 0,
    salarySpecialist: 0,
    salaryAdmin: 0,
    salaryConsultant: 0,
    months: 12
  });

  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    const total = 
      (formData.securitySpecialists * formData.salarySpecialist * formData.months) +
      (formData.administrators * formData.salaryAdmin * formData.months) +
      (formData.consultants * formData.salaryConsultant * formData.months);
    setTotal(total);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Персонал</h3>
      <form onSubmit={calculateTotal}>
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
        <button type="submit">Рассчитать</button>
        {total > 0 && (
          <div className="result">
            <strong>Общие затраты на персонал: {total.toLocaleString()} руб.</strong>
          </div>
        )}
      </form>
    </div>
  );
}

export default PersonnelForm;