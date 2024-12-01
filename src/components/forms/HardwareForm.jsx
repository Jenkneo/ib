import React, { useState } from 'react';

function HardwareForm() {
  const [formData, setFormData] = useState({
    servers: 0,
    workstations: 0,
    firewalls: 0,
    pricePerServer: 0,
    pricePerWorkstation: 0,
    pricePerFirewall: 0
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
      (formData.servers * formData.pricePerServer) +
      (formData.workstations * formData.pricePerWorkstation) +
      (formData.firewalls * formData.pricePerFirewall);
    setTotal(total);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Аппаратное обеспечение</h3>
      <form onSubmit={calculateTotal}>
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