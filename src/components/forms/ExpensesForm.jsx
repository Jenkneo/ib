import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import formFields from './formFields';

function ExpensesForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    hasAntivirus: false,
    antivirusPrice: 0,
    antivirusPeriod: 0,
    antivirusWorkerSalary: 0,

    hasFirewall: false,
    firewallPrice: 0,
    firewallPeriod: 0,
    firewallWorkerSalary: 0,
    
    hasPreventionSystem: false,
    preventionSystemPrice: 0,
    preventionSystemPeriod: 0,
    preventionSystemWorkerSalary: 0,

    hasEncryption: false,
    encryptionPrice: 0,
    encryptionPeriod: 0,
    encryptionWorkerSalary: 0,

    hasAuthenticationSystem: false,
    authenticationSystemPrice: 0,
    authenticationSystemPeriod: 0,
    authenticationSystemWorkerSalary: 0,

    hasEmailSecurity: false,
    emailSecurityPrice: 0,
    emailSecurityPeriod: 0,
    emailSecurityWorkerSalary: 0,

    hasVulnerabilitySystem: false,
    vulnerabilitySystemPrice: 0,
    vulnerabilitySystemPeriod: 0,
    vulnerabilitySystemWorkerSalary: 0,

    hasBackupSystem: false,
    backupSystemPrice: 0,
    backupSystemPeriod: 0,
    backupSystemWorkerSalary: 0,

    hasAntiExploitSoftware: false,
    antiExploitSoftwarePrice: 0,
    antiExploitSoftwarePeriod: 0,
    antiExploitSoftwareWorkerSalary: 0,

    hasSIEM: false,
    siemPrice: 0,
    siemPeriod: 0,
    siemWorkerSalary: 0,

    hasSOAR: false,
    soarPrice: 0,
    soarPeriod: 0,
    soarWorkerSalary: 0,

    hasWAF: false,
    wafPrice: 0,
    wafPeriod: 0,
    wafWorkerSalary: 0,

    hasDLP: false,
    dlpPrice: 0,
    dlpPeriod: 0,
    dlpWorkerSalary: 0,

    hasPenTesting: false,
    penTestingPrice: 0,
    penTestingPeriod: 0,
    penTestingWorkerSalary: 0,

    hasBotnetSecurity: false,
    botnetSecurityPrice: 0,
    botnetSecurityPeriod: 0,
    botnetSecurityWorkerSalary: 0,

    hasCryptographicKeySystem: false,
    cryptographicKeySystemPrice: 0,
    cryptographicKeySystemPeriod: 0,
    cryptographicKeySystemWorkerSalary: 0,

    hasSafetyStandartMeans: false,
    safetyStandartMeansPrice: 0,
    safetyStandartMeansPeriod: 0,
    safetyStandartMeansWorkerSalary: 0,
  });

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let currentInput = false;
    let currentPrice = 0;
    let currentPeriod = 0;
    let currentWorkerSalary = 0;
    
    const total = Object.entries(formData).reduce((acc, [key, value]) => {
      if (key.startsWith('has')) {
        currentInput = value
        currentPrice = 0;
        currentPeriod = 0;
        currentWorkerSalary = 0;
      }
      if (currentInput) {
        if (key.toLowerCase().includes('price')) currentPrice = value;
        if (key.toLowerCase().includes('period')) currentPeriod = value;
        if (key.toLowerCase().includes('workersalary')) currentWorkerSalary = value;
      }
      if (key.toLowerCase().includes('workersalary')) {
        return acc + currentPrice + (currentPeriod * currentWorkerSalary);
      }
      return acc
    }, 0);
    
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
      title: 'Антивирус',
      checkboxName: 'hasAntivirus',
      fields: formFields.antivirusFields,
    },
    {
      title: 'Фаервол',
      checkboxName: 'hasFirewall',
      fields: formFields.firewallFields,
    },
    {
      title: 'Предотвращение',
      checkboxName: 'hasPreventionSystem',
      fields: formFields.preventionSystemFields,
    },
    {
      title: 'Шифрование',
      checkboxName: 'hasEncryption',
      fields: formFields.encryptionFields,
    },
    {
      title: 'Аутентификация',
      checkboxName: 'hasAuthenticationSystem',
      fields: formFields.authenticationSystemFields,
    },
    {
      title: 'Безопасность почты',
      checkboxName: 'hasEmailSecurity',
      fields: formFields.emailSecurityFields,
    },
    {
      title: 'Системы управления уязвимостями',
      checkboxName: 'hasVulnerabilitySystem',
      fields: formFields.vulnerabilitySystemFields,
    },
    {
      title: 'Резервное копирование и восстановление данных',
      checkboxName: 'hasBackupSystem',
      fields: formFields.backupSystemFields,
    },
    {
      title: 'Анти-эксплойт ПО',
      checkboxName: 'hasAntiExploitSoftware',
      fields: formFields.antiExploitSoftwareFields,
    },
    {
      title: 'Средства мониторинга и анализа безопасности (SIEM)',
      checkboxName: 'hasSIEM',
      fields: formFields.siemFields,
    },
    {
      title: 'Платформы для управления инцидентами безопасности (SOAR)',
      checkboxName: 'hasSOAR',
      fields: formFields.soarFields,
    },
    {
      title: 'Инструменты для защиты веб-приложений (WAF)',
      checkboxName: 'hasWAF',
      fields: formFields.wafFields,
    },
    {
      title: 'Системы обнаружения и предотвращения утечек данных (DLP)',
      checkboxName: 'hasDLP',
      fields: formFields.dlpFields,
    },
    {
      title: 'Тестирование на проникновение (Penetration testing)',
      checkboxName: 'hasPenTesting',
      fields: formFields.penTestingFields,
    },
    {
      title: 'Системы безопасности от ботнет-атак',
      checkboxName: 'hasBotnetSecurity',
      fields: formFields.botnetSecurityFields,
    },
    {
      title: 'Криптографические системы',
      checkboxName: 'hasCryptographicKeySystem',
      fields: formFields.cryptographicKeySystemFields,
    },
    {
      title: 'Средства безопасности стандарта (Safety Standart Means)',
      checkboxName: 'hasSafetyStandartMeans',
      fields: formFields.safetyStandartMeansFields,
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
          <h3 className='form-title'>Расходы на обучение специалистов по информационной безопасности</h3>
        </div>
      )}
    </div>
  );
}

export default ExpensesForm;