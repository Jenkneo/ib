import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import formFields from './formFields';

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
    firewallPeriod: 0,
    firewallWorkerSalary: 0,
    firewallSubscription: 0,
    
    hasPreventionSystem: false,
    preventionSystemPrice: 0,
    preventionSystemPeriod: 0,
    preventionSystemWorkerSalary: 0,
    preventionSystemSubscription: 0,

    hasEncryption: false,
    encryptionPrice: 0,
    encryptionPeriod: 0,
    encryptionWorkerSalary: 0,
    encryptionSubscription: 0,

    hasAuthenticationSystem: false,
    authenticationSystemPrice: 0,
    authenticationSystemPeriod: 0,
    authenticationSystemWorkerSalary: 0,
    authenticationSystemSubscription: 0,

    hasEmailSecurity: false,
    emailSecurityPrice: 0,
    emailSecurityPeriod: 0,
    emailSecurityWorkerSalary: 0,
    emailSecuritySubscription: 0,

    hasVulnerabilitySystem: false,
    vulnerabilitySystemPrice: 0,
    vulnerabilitySystemPeriod: 0,
    vulnerabilitySystemWorkerSalary: 0,
    vulnerabilitySystemSubscription: 0,

    hasBackupSystem: false,
    backupSystemPrice: 0,
    backupSystemPeriod: 0,
    backupSystemWorkerSalary: 0,
    backupSystemSubscription: 0,

    hasAntiExploitSoftware: false,
    antiExploitSoftwarePrice: 0,
    antiExploitSoftwarePeriod: 0,
    antiExploitSoftwareWorkerSalary: 0,
    antiExploitSoftwareSubscription: 0,

    hasSIEM: false,
    siemPrice: 0,
    siemPeriod: 0,
    siemWorkerSalary: 0,
    siemSubscription: 0,

    hasSOAR: false,
    soarPrice: 0,
    soarPeriod: 0,
    soarWorkerSalary: 0,
    soarSubscription: 0,

    hasWAF: false,
    wafPrice: 0,
    wafPeriod: 0,
    wafWorkerSalary: 0,
    wafSubscription: 0,

    hasDLP: false,
    dlpPrice: 0,
    dlpPeriod: 0,
    dlpWorkerSalary: 0,
    dlpSubscription: 0,

    hasPenTesting: false,
    penTestingPrice: 0,
    penTestingPeriod: 0,
    penTestingWorkerSalary: 0,
    penTestingSubscription: 0,

    hasBotnetSecurity: false,
    botnetSecurityPrice: 0,
    botnetSecurityPeriod: 0,
    botnetSecurityWorkerSalary: 0,
    botnetSecuritySubscription: 0,

    hasCryptographicKeySystem: false,
    cryptographicKeySystemPrice: 0,
    cryptographicKeySystemPeriod: 0,
    cryptographicKeySystemWorkerSalary: 0,
    cryptographicKeySystemSubscription: 0,

    hasSafetyStandartMeans: false,
    safetyStandartMeansPrice: 0,
    safetyStandartMeansPeriod: 0,
    safetyStandartMeansWorkerSalary: 0,
    safetyStandartMeansSubscription: 0
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

  const sections = [
    {
      title: 'Фаервол',
      checkboxName: 'hasFirewall',
      fields: formFields.firewallFields,
    },
    {
      title: 'VPN',
      checkboxName: 'hasVPN',
      fields: formFields.vpnFields,
    },
  ];

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
          {sections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}

{/* ------------------------- Антивирус ------------------------ */}
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
                  <label>Стоимость:</label>
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
{/* ------------------------- Фаерволы ------------------------- */}
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
                    name="firewallPrice"
                    value={formData.firewallPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="firewallPeriod"
                    value={formData.firewallPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="firewallWorkerSalary"
                    value={formData.firewallWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="firewallSubscription"
                    value={formData.firewallSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
              
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* - Системы предотвращения и обнаружения вторжений (IDS/IPS) - */}
          <div className="form-section">            
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasPreventionSystem"
                  checked={formData.hasPreventionSystem}
                  onChange={handleBoolChange}
                />
                <h4>Система предотвращения и обнаружения вторжений</h4>
              </label>
            </div>

            {formData.hasPreventionSystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость Системы предотвращения и обнаружения вторжений:</label>
                  <input
                    type="number"
                    name="preventionSystemPrice"
                    value={formData.preventionSystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="preventionSystemPeriod"
                    value={formData.preventionSystemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="preventionSystemWorkerSalary"
                    value={formData.preventionSystemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="preventionSystemSubscription"
                    value={formData.preventionSystemSubscription}
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
                    name="encryptionPrice"
                    value={formData.encryptionPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="encryptionPeriod"
                    value={formData.encryptionPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="encryptionWorkerSalary"
                    value={formData.encryptionWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="encryptionSubscription"
                    value={formData.encryptionSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------- Управление доступом и аутентификация ----------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAuthenticationSystem"
                  checked={formData.hasAuthenticationSystem}
                  onChange={handleBoolChange}
                />
                <h4>Системы управления доступом и аутентификации</h4>
              </label>
            </div>

            {formData.hasAuthenticationSystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость системы:</label>
                  <input
                    type="number"
                    name="authenticationSystemPrice"
                    value={formData.authenticationSystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="authenticationSystemPeriod"
                    value={formData.authenticationSystemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="authenticationSystemWorkerSalary"
                    value={formData.authenticationSystemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="authenticationSystemSubscription"
                    value={formData.authenticationSystemSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------- Решения для защиты электронной почты ----------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasEmailProtection"
                  checked={formData.hasEmailProtection}
                  onChange={handleBoolChange}
                />
                <h4>Решения для защиты электронной почты</h4>
              </label>
            </div>

            {formData.hasEmailProtection && (
              <div>
                <div className="form-group">
                  <label>Стоимость решения:</label>
                  <input
                    type="number"
                    name="emailSecurityPrice"
                    value={formData.emailSecurityPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="emailSecurityPeriod"
                    value={formData.emailSecurityPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="emailSecurityWorkerSalary"
                    value={formData.emailSecurityWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="emailSecuritySubscription"
                    value={formData.emailSecuritySubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------------- Системы управления уязвимостями -------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasVulnerabilitySystem"
                  checked={formData.hasVulnerabilitySystem}
                  onChange={handleBoolChange}
                />
                <h4>Системы управления уязвимостями</h4>
              </label>
            </div>

            {formData.hasVulnerabilitySystem && (
              <div>
                <div className="form-group">
                  <label>Стоимость Системы уязвимостей:</label>
                  <input
                    type="number"
                    name="vulnerabilitySystemPrice"
                    value={formData.vulnerabilitySystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="vulnerabilitySystemPeriod"
                    value={formData.vulnerabilitySystemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="vulnerabilitySystemWorkerSalary"
                    value={formData.vulnerabilitySystemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Cтоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="vulnerabilitySystemSubscription"
                    value={formData.vulnerabilitySystemSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ----------------------- Backup System ---------------------- */}
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
                    name="backupSystemPrice"
                    value={formData.backupSystemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="backupSystemPeriod"
                    value={formData.backupSystemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="backupSystemWorkerSalary"
                    value={formData.backupSystemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Стоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="backupSystemSubscription"
                    value={formData.backupSystemSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ------- Резервное копирование и восстановление данных ------ */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAntiExploitSoftware"
                  checked={formData.hasAntiExploitSoftware}
                  onChange={handleBoolChange}
                />
                <h4>Резервное копирование и восстановление данных</h4>
              </label>
            </div>

            {formData.hasAntiExploitSoftware && (
              <div>
                <div className="form-group">
                  <label>Стоимость копирования:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwarePrice"
                    value={formData.antiExploitSoftwarePrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwarePeriod"
                    value={formData.antiExploitSoftwarePeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwareWorkerSalary"
                    value={formData.antiExploitSoftwareWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwareSubscription"
                    value={formData.antiExploitSoftwareSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Стоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwareSubscription"
                    value={formData.antiExploitSoftwareSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* -------------------- Анти-эксплойт ПО ---------------------- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasAntiExploitSoftware"
                  checked={formData.hasAntiExploitSoftware}
                  onChange={handleBoolChange}
                />
                <h4>Анти-эксплойт ПО</h4>
              </label>
            </div>

            {formData.hasAntiExploitSoftware && (
              <div>
                <div className="form-group">
                  <label>Стоимость:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwarePrice"
                    value={formData.antiExploitSoftwarePrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwarePeriod"
                    value={formData.antiExploitSoftwarePeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwareWorkerSalary"
                    value={formData.antiExploitSoftwareWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Стоимость подписок и лицензий:</label>
                  <input
                    type="number"
                    name="antiExploitSoftwareSubscription"
                    value={formData.antiExploitSoftwareSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ---- Средства мониторинга и анализа безопасности (SIEM) ---- */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className='toggle-label'>
                <input
                  type="checkbox"
                  name="hasSIEM"
                  checked={formData.hasSIEM}
                  onChange={handleBoolChange}
                />
                <h4>Средства мониторинга и анализа безопасности (SIEM)</h4>
              </label>
            </div>

            {formData.hasSIEM && (
              <div>
                <div className="form-group">
                  <label>Стоимость:</label>
                  <input
                    type="number"
                    name="siemPrice"
                    value={formData.siemPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="siemPeriod"
                    value={formData.siemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="siemWorkerSalary"
                    value={formData.siemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="siemSubscription"
                    value={formData.siemSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}    
{/* - Платформы для управления инцидентами безопасности (SOAR) - */}
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
                    name="soarPrice"
                    value={formData.soarPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="soarPeriod"
                    value={formData.soarPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="soarWorkerSalary"
                    value={formData.soarWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="soarSubscription"
                    value={formData.soarSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* -------- Инструменты для защиты веб-приложений (WAF) ------- */}
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
                    name="wafPrice"
                    value={formData.wafPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="wafPeriod"
                    value={formData.wafPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="wafWorkerSalary"
                    value={formData.wafWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="wafSubscription"
                    value={formData.wafSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* -------- Средства для защиты от утечек данных (DLP) -------- */}
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
                    name="dlpPrice"
                    value={formData.dlpPrice}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="dlpPeriod"
                    value={formData.dlpPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="dlpWorkerSalary"
                    value={formData.dlpWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="dlpSubscription"
                    value={formData.dlpSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* -------------- Тестирование на проникновение --------------- */}
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
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="penTestingPeriod"
                    value={formData.penTestingPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="penTestingWorkerSalary"
                    value={formData.penTestingWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="penTestingSubscription"
                    value={formData.penTestingSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ---------------- Защита от ботнетов ------------------------ */}
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
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="botnetSecurityPeriod"
                    value={formData.botnetSecurityPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="botnetSecurityWorkerSalary"
                    value={formData.botnetSecurityWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="botnetSecuritySubscription"
                    value={formData.botnetSecuritySubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* ---- Системы для управления криптографическими ключами ----- */}
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
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="cryptographicKeySystemPeriod"
                    value={formData.cryptographicKeySystemPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="cryptographicKeySystemWorkerSalary"
                    value={formData.cryptographicKeySystemWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="cryptographicKeySystemSubscription"
                    value={formData.cryptographicKeySystemSubscription}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            )}
          </div>
{/* ------------------------------------------------------------ */}
{/* -- Средства для соблюдения норм и стандартов безопасности -- */}
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
                <div className="form-group">
                  <label>Срок установки и настройки:</label>
                  <input
                    type="number"
                    name="safetyStandartMeansPeriod"
                    value={formData.safetyStandartMeansPeriod}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Заработная плату сотрудника:</label>
                  <input
                    type="number"
                    name="safetyStandartMeansWorkerSalary"
                    value={formData.safetyStandartMeansWorkerSalary}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Количество сотрудников:</label>
                  <input
                    type="number"
                    name="safetyStandartMeansSubscription"
                    value={formData.safetyStandartMeansSubscription}
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