import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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