import React, { useState } from 'react';
import Select from 'react-select';

function HardwareForm() {
  const [formData, setFormData] = useState({
    servers: 0,
    workstations: 0,
    firewalls: 0,
    pricePerServer: 0,
    pricePerWorkstation: 0,
    pricePerFirewall: 0,
    serverType: 'physical',
    hasRedundancy: false,
    redundancyLevel: '',
    networkType: 'basic',
    customSecurity: false,
    securityFeatures: []
  });

  const [total, setTotal] = useState(0);

  const serverTypes = [
    { value: 'physical', label: 'Физический сервер' },
    { value: 'virtual', label: 'Виртуальный сервер' },
    { value: 'hybrid', label: 'Гибридное решение' }
  ];

  const redundancyLevels = [
    { value: 'basic', label: 'Базовое резервирование' },
    { value: 'advanced', label: 'Продвинутое резервирование' },
    { value: 'enterprise', label: 'Корпоративное резервирование' }
  ];

  const networkTypes = [
    { value: 'basic', label: 'Базовая сеть' },
    { value: 'advanced', label: 'Расширенная сеть' },
    { value: 'enterprise', label: 'Корпоративная сеть' }
  ];

  const securityFeatures = [
    { value: 'ids', label: 'Система обнаружения вторжений (IDS)' },
    { value: 'ips', label: 'Система предотвращения вторжений (IPS)' },
    { value: 'dlp', label: 'Защита от утечек данных (DLP)' },
    { value: 'encryption', label: 'Шифрование данных' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption.value
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setFormData(prev => ({
      ...prev,
      securityFeatures: selectedOptions.map(option => option.value)
    }));
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    let total = 
      (formData.servers * formData.pricePerServer) +
      (formData.workstations * formData.pricePerWorkstation) +
      (formData.firewalls * formData.pricePerFirewall);

    // Добавляем наценку за тип сервера
    if (formData.serverType === 'virtual') total *= 1.1;
    if (formData.serverType === 'hybrid') total *= 1.2;

    // Добавляем стоимость резервирования
    switch (formData.redundancyLevel) {
      case 'basic': total *= 1.15; break;
      case 'advanced': total *= 1.25; break;
      case 'enterprise': total *= 1.35; break;
      default: break;
    }

    // Добавляем стоимость сетевой инфраструктуры
    switch (formData.networkType) {
      case 'advanced': total *= 1.2; break;
      case 'enterprise': total *= 1.4; break;
      default: break;
    }

    // Добавляем стоимость дополнительных функций безопасности
    if (formData.customSecurity) {
      total += formData.securityFeatures.length * 50000;
    }

    setTotal(total);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Аппаратное обеспечение</h3>
      <form onSubmit={calculateTotal}>
        <div className="form-section">
          <h4>Основные параметры</h4>
          <div className="form-group">
            <label>Количество серверов:</label>
            <input
              type="number"
              name="servers"
              value={formData.servers}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Стоимость одного сервера (руб):</label>
            <input
              type="number"
              name="pricePerServer"
              value={formData.pricePerServer}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Тип серверной инфраструктуры:</label>
            <Select
              options={serverTypes}
              value={serverTypes.find(type => type.value === formData.serverType)}
              onChange={(option) => handleSelectChange(option, { name: 'serverType' })}
              className="react-select"
            />
          </div>
        </div>

        <div className="form-section">
          <h4>Рабочие станции</h4>
          <div className="form-group">
            <label>Количество рабочих станций:</label>
            <input
              type="number"
              name="workstations"
              value={formData.workstations}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Стоимость одной рабочей станции (руб):</label>
            <input
              type="number"
              name="pricePerWorkstation"
              value={formData.pricePerWorkstation}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>

        <div className="form-section">
          <h4>Сетевая безопасность</h4>
          <div className="form-group">
            <label>Количество межсетевых экранов:</label>
            <input
              type="number"
              name="firewalls"
              value={formData.firewalls}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Стоимость одного межсетевого экрана (руб):</label>
            <input
              type="number"
              name="pricePerFirewall"
              value={formData.pricePerFirewall}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Тип сетевой инфраструктуры:</label>
            <Select
              options={networkTypes}
              value={networkTypes.find(type => type.value === formData.networkType)}
              onChange={(option) => handleSelectChange(option, { name: 'networkType' })}
              className="react-select"
            />
          </div>
        </div>

        <div className="form-section">
          <h4>Дополнительные параметры</h4>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="hasRedundancy"
                checked={formData.hasRedundancy}
                onChange={handleChange}
              />
              Включить резервирование
            </label>
          </div>

          {formData.hasRedundancy && (
            <div className="form-group">
              <label>Уровень резервирования:</label>
              <Select
                options={redundancyLevels}
                value={redundancyLevels.find(level => level.value === formData.redundancyLevel)}
                onChange={(option) => handleSelectChange(option, { name: 'redundancyLevel' })}
                className="react-select"
              />
            </div>
          )}

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="customSecurity"
                checked={formData.customSecurity}
                onChange={handleChange}
              />
              Дополнительные функции безопасности
            </label>
          </div>

          {formData.customSecurity && (
            <div className="form-group">
              <label>Выберите функции безопасности:</label>
              <Select
                isMulti
                options={securityFeatures}
                value={securityFeatures.filter(feature => 
                  formData.securityFeatures.includes(feature.value)
                )}
                onChange={handleMultiSelectChange}
                className="react-select"
              />
            </div>
          )}
        </div>

        <button type="submit">Рассчитать</button>
        {total > 0 && (
          <div className="result">
            <strong>Общая стоимость аппаратного обеспечения: {total.toLocaleString()} руб.</strong>
          </div>
        )}
      </form>
    </div>
  );
}

export default HardwareForm;