import React, { useState } from 'react';

function SoftwareForm() {
  const [formData, setFormData] = useState({
    antivirusLicenses: 0,
    firewallLicenses: 0,
    encryptionSoftware: 0,
    pricePerAntivirus: 0,
    pricePerFirewall: 0,
    pricePerEncryption: 0
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
      (formData.antivirusLicenses * formData.pricePerAntivirus) +
      (formData.firewallLicenses * formData.pricePerFirewall) +
      (formData.encryptionSoftware * formData.pricePerEncryption);
    setTotal(total);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Программное обеспечение</h3>
      <form onSubmit={calculateTotal}>
        <div className="form-group">
          <label>Количество лицензий антивируса:</label>
          <input
            type="number"
            name="antivirusLicenses"
            value={formData.antivirusLicenses}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Стоимость одной лицензии антивируса (руб):</label>
          <input
            type="number"
            name="pricePerAntivirus"
            value={formData.pricePerAntivirus}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Количество лицензий файрвола:</label>
          <input
            type="number"
            name="firewallLicenses"
            value={formData.firewallLicenses}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Стоимость одной лицензии файрвола (руб):</label>
          <input
            type="number"
            name="pricePerFirewall"
            value={formData.pricePerFirewall}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Количество лицензий ПО для шифрования:</label>
          <input
            type="number"
            name="encryptionSoftware"
            value={formData.encryptionSoftware}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Стоимость одной лицензии ПО для шифрования (руб):</label>
          <input
            type="number"
            name="pricePerEncryption"
            value={formData.pricePerEncryption}
            onChange={handleChange}
            min="0"
          />
        </div>
        <button type="submit">Рассчитать</button>
        {total > 0 && (
          <div className="result">
            <strong>Общая стоимость программного обеспечения: {total.toLocaleString()} руб.</strong>
          </div>
        )}
      </form>
    </div>
  );
}

export default SoftwareForm;