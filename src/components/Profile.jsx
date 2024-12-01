import React, { useState } from 'react';
import Select from 'react-select';

function Profile({ user, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    organization: user.organization || '',
    industry: user.industry || '',
    annualBudget: user.annualBudget || '',
    securityBudget: user.securityBudget || '',
    organizationSize: user.organizationSize || 'Маленький'
  });

  const organizationSizes = [
    { value: 'Маленький', label: 'Маленький' },
    { value: 'Средний', label: 'Средний' },
    { value: 'Большой', label: 'Большой' }
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    alert('Профиль успешно обновлен');
  };

  return (
    <div className="profile-container">
      <h2 className="form-title">Личный кабинет</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Фамилия:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            disabled
            className="disabled-input"
          />
        </div>
        <div className="form-group">
          <label>Название организации:</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Тип отрасли:</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
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
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default Profile;