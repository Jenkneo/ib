import React, { useState } from 'react';
import Select from 'react-select';
import { updateProfile } from '../services/api';

function Profile({ user, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    organizationName: user.organizationName || '',
    industryType: user.industryType || '',
    annualBudget: user.annualBudget || '',
    securityBudget: user.securityBudget || '',
    organizationSize: user.organizationSize || 'small'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const organizationSizes = [
    { value: 'small', label: 'Маленький' },
    { value: 'medium', label: 'Средний' },
    { value: 'large', label: 'Большой' }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const profileData = {
        organizationName: formData.organizationName,
        industryType: formData.industryType,
        annualBudget: Number(formData.annualBudget),
        securityBudget: Number(formData.securityBudget),
        organizationSize: formData.organizationSize
      };

      const updatedProfile = await updateProfile(profileData);
      onUpdateProfile(updatedProfile);
      setSuccessMessage('Профиль успешно обновлен');
    } catch (err) {
      setError(err.message || 'Ошибка при обновлении профиля');
    } finally {
      setIsLoading(false);
    }
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
            disabled={true}
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
            disabled={true}
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
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label>Тип отрасли:</label>
          <input
            type="text"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label>Годовой бюджет организации (руб):</label>
          <input
            type="number"
            name="annualBudget"
            value={formData.annualBudget}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label>Бюджет на информационную безопасность (руб):</label>
          <input
            type="number"
            name="securityBudget"
            value={formData.securityBudget}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label>Размер организации:</label>
          <Select
            value={organizationSizes.find(size => size.value === formData.organizationSize)}
            onChange={handleSizeChange}
            options={organizationSizes}
            className="react-select"
            isDisabled={isLoading}
          />
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </form>
    </div>
  );
}

export default Profile;