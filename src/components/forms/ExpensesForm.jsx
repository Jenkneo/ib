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
    months: 12,
    securityFeatures: [],

    
    hasAntivirus: false,
    antivirusPrice: 0,
    antivirusPeriod: 0,
    antivirusWorkerSalary: 0,
    antivirusSubscription: 0,

    hasFirewall: false,
    firewallPrice: 0,
    
    hasPreventionSystem: false,
    preventionSystemPrice: 0,

    hasEncryption: false,
    encryptionPrice: 0,

    hasAuthenticationSystem: false,
    authenticationSystemPrice: 0,

    hasEmailSecurity: false,
    emailSecurityPrice: 0,

    hasVulnerabilitySystem: false,
    vulnerabilitySystemPrice: 0,

    hasBackupSystem: false,
    backupSystemPrice: 0,

    hasAntiExploitSoftware: false,
    antiExploitSoftwarePrice: 0,

    hasSIEM: false,
    siemPrice: 0,

    hasSOAR: false,
    soarPrice: 0,

    hasWAF: false,
    wafPrice: 0,

    hasDLP: false,
    dlpPrice: 0,

    hasPenTesting: false,
    penTestingPrice: 0,

    hasBotnetSecurity: false,
    botnetSecurityPrice: 0,

    hasCryptographicKeySystem: false,
    cryptographicKeySystemPrice: 0,

    hasSafetyStandartMeans: false,
    safetyStandartMeansPrice: 0
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

  const handleBoolChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
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
          <h3>Информация о расходах</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <h3 className='form-title'>Расходы на программное обеспечение для информационной безопасности</h3>
            
{/* ------------------------ Антивирус ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAntivirus"
                  checked={formData.hasAntivirus}
                  onChange={handleBoolChange}
                />
                <h4>Антивирус</h4>
              </label>
            </div>

            {formData.hasAntivirus && (
              <div>
                <div className="form-group">
                  <label>Стоимость Антивируса:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.antivirusPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="antivirusPeriod"
                    value={formData.antivirusPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="antivirusWorkerSalary"
                    value={formData.antivirusWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="antivirusSubscription"
                    value={formData.antivirusSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Фаерволы ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasFirewall"
                  checked={formData.hasFirewall}
                  onChange={handleBoolChange}
                />
                <h4>Фаервол</h4>
              </label>
            </div>

            {formData.hasFirewall && (
              <div>
                <div className="form-group">
                  <label>Стоимость Фаервола:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.antivirusPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Шифрование ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasEncryption"
                  checked={formData.hasEncryption}
                  onChange={handleBoolChange}
                />
                <h4>Шифрование</h4>
              </label>
            </div>

            {formData.hasEncryption && (
              <div>
                <div className="form-group">
                  <label>Стоимость Шифрования:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.encryptionPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Аутентификация ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAuthenticationSystem"
                  checked={formData.hasAuthenticationSystem}
                  onChange={handleBoolChange}
                />
                <h4>Аутентификация</h4>
              </label>
            </div>

            {formData.hasAuthenticationSystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость Аутентификации:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.authenticationSystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Защита электронной почты ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasEmailProtection"
                  checked={formData.hasEmailProtection}
                  onChange={handleBoolChange}
                />
                <h4>Защита электронной почты</h4>
              </label>
            </div>

            {formData.hasEmailProtection && (
              <div>
                <div className="form-group">
                  <label>Стоимость Защиты электронной почты:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.emailProtectionPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Vulnerability System ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasVulnerabilitySystem"
                  checked={formData.hasVulnerabilitySystem}
                  onChange={handleBoolChange}
                />
                <h4>Система уязвимостей</h4>
              </label>
            </div>

            {formData.hasVulnerabilitySystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость Системы уязвимостей:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.vulnerabilitySystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ Backup System ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasBackupSystem"
                  checked={formData.hasBackupSystem}
                  onChange={handleBoolChange}
                />
                <h4>Система резервного копирования</h4>
              </label>
            </div>

            {formData.hasBackupSystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость Системы резервного копирования:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.backupSystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------------------ AntiExploitSoftware ------------------------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAntiExploitSoftware"
                  checked={formData.hasAntiExploitSoftware}
                  onChange={handleBoolChange}
                />
                <h4>AntiExploitSoftware</h4>
              </label>
            </div>

            {formData.hasAntiExploitSoftware && (
              <div>
                <div className="form-group">
                  <label>Стоимость AntiExploitSoftware:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.antiExploitSoftwarePrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- SIEM ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasSIEM"
                  checked={formData.hasSIEM}
                  onChange={handleBoolChange}
                />
                <h4>SIEM</h4>
              </label>
            </div>

            {formData.hasSIEM && (
              <div>
                <div className="form-group">
                  <label>Стоимость SIEM:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.siemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}    
{/* ----------------------- SOAR ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasSOAR"
                  checked={formData.hasSOAR}
                  onChange={handleBoolChange}
                />
                <h4>SOAR</h4>
              </label>
            </div>

            {formData.hasSOAR && (
              <div>
                <div className="form-group">
                  <label>Стоимость SOAR:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.soarPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- WAF ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasWAF"
                  checked={formData.hasWAF}
                  onChange={handleBoolChange}
                />
                <h4>WAF</h4>
              </label>
            </div>   

            {formData.hasWAF && (
              <div>
                <div className="form-group">
                  <label>Стоимость WAF:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.wafPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- DLP ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasDLP"
                  checked={formData.hasDLP}
                  onChange={handleBoolChange}
                />
                <h4>DLP</h4>
              </label>
            </div>

            {formData.hasDLP && (
              <div>
                <div className="form-group">
                  <label>Стоимость DLP:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.dlpPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- PenTesting ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasPenTesting"
                  checked={formData.hasPenTesting}
                  onChange={handleBoolChange}
                />
                <h4>PenTesting</h4>
              </label>
            </div>

            {formData.hasPenTesting && (
              <div>
                <div className="form-group">
                  <label>Стоимость PenTesting:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.penTestingPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- Botnet Security ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasBotnetSecurity"
                  checked={formData.hasBotnetSecurity}
                  onChange={handleBoolChange}
                />
                <h4>Botnet Security</h4>
              </label>
            </div>

            {formData.hasBotnetSecurity && (
              <div>
                <div className="form-group">
                  <label>Стоимость Botnet Security:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.botnetSecurityPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- CryptographicKeySystem ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasCryptographicKeySystem"
                  checked={formData.hasCryptographicKeySystem}
                  onChange={handleBoolChange}
                />
                <h4>CryptographicKeySystem</h4>
              </label>
            </div>

            {formData.hasCryptographicKeySystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость CryptographicKeySystem:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.cryptographicKeySystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- SafetyStandartMeans ------------------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasSafetyStandartMeans"
                  checked={formData.hasSafetyStandartMeans}
                  onChange={handleBoolChange}
                />
                <h4>SafetyStandartMeans</h4>
              </label>
            </div>

            {formData.hasSafetyStandartMeans && (
              <div>
                <div className="form-group">
                  <label>Стоимость SafetyStandartMeans:</label>
                  <input
                    type="number"
                    name="antivirusPrice"
                    value={formData.safetyStandartMeansPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
          <h3 className='form-title'>Расходы на обучение специалистов по информационной безопасности</h3>
        </div>
      )}
    </div>
  );
}

export default PersonnelForm;