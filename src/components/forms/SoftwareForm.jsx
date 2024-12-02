import React, { useState, useEffect, useCallback } from 'react';

function SoftwareForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    antivirusLicenses: 0,
    firewallLicenses: 0,
    encryptionSoftware: 0,
    pricePerAntivirus: 0,
    pricePerFirewall: 0,
    pricePerEncryption: 0
  });

  // Мемоизация calculateTotal
  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    const total =
      (formData.antivirusLicenses * formData.pricePerAntivirus) +
      (formData.firewallLicenses * formData.pricePerFirewall) +
      (formData.encryptionSoftware * formData.pricePerEncryption);

    onCalculate(total);
  }, [formData, isEnabled, onCalculate]);

  // Эффект для расчета
  useEffect(() => {
    if (isEnabled) {
      calculateTotal();
    } else if (Object.values(formData).some(value => value > 0)) {
      onCalculate(0); // Сброс значений
    }
  }, [isEnabled, calculateTotal, onCalculate, formData]);

  // Обработчик изменения данных
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
          Включить расчет программного обеспечения
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <div className="form-section">
            <h4>Антивирусное ПО</h4>
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
          </div>

          <div className="form-section">
            <h4>Файрвол</h4>
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
          </div>

          <div className="form-section">
            <h4>Шифрование</h4>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default SoftwareForm;
