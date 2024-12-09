import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import softwareFormFields from './softwareFormFields';
import studyStaffFormFields from './studyStaffFormFields';
import hardwareFormFields from './hardwareFormFields';
import operatingExpensesFormFields from './operatingExpensesFormFields';
import cyberAttackFormFields from './cyberAttackFormFields';

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

    hasSecurityCourses: false,
    securityCoursesPrice: 0,

    hasStaffWorkingTime: false,
    staffWorkingTimePrice: 0,

    hasInnerTraining: false,
    innerTrainingPrice: 0,

    hasOnlineCourses: false,
    onlineCoursesPrice: 0,

    hasStudyingSoftware: false,
    studyingSoftwarePrice: 0,

    hasLabKits: false,
    labKitsPrice: 0,

    hasSecuritySeminars: false,
    securitySeminarsPrice: 0,

    hasConferenceTikets: false,
    conferenceTiketsPrice: 0,

    electricityCost: 0,

    hasComputer: false,
    computerPrice: 0,
    computerLiquidationPrice: 0,
    computerUsageTime: 0,
    computerInstallationTime: 0,
    computerWorkerSalary: 0,
    computerPower: 0,

    hasScreen: false,
    screenPrice: 0,
    screenLiquidationPrice: 0,
    screenUsageTime: 0,
    screenInstallationTime: 0,
    screenWorkerSalary: 0,
    screenPower: 0,

    hasPrinter: false,
    printerPrice: 0,
    printerLiquidationPrice: 0,
    printerUsageTime: 0,
    printerInstallationTime: 0,
    printerWorkerSalary: 0,
    printerPower: 0,

    hasScanner: false,
    scannerPrice: 0,
    scannerLiquidationPrice: 0,
    scannerUsageTime: 0,
    scannerInstallationTime: 0,
    scannerWorkerSalary: 0,
    scannerPower: 0,

    hasWebCamera: false,
    webCameraPrice: 0,
    webCameraLiquidationPrice: 0,
    webCameraUsageTime: 0,
    webCameraInstallationTime: 0,
    webCameraWorkerSalary: 0,
    webCameraPower: 0,

    hasNetworkDevices: false,
    networkDevicesPrice: 0,
    networkDevicesLiquidationPrice: 0,
    networkDevicesUsageTime: 0,
    networkDevicesInstallationTime: 0,
    networkDevicesWorkerSalary: 0,
    networkDevicesPower: 0,

    hasPowerSupply: false,
    powerSupplyPrice: 0,
    powerSupplyLiquidationPrice: 0,
    powerSupplyUsageTime: 0,
    powerSupplyInstallationTime: 0,
    powerSupplyWorkerSalary: 0,
    powerSupplyPower: 0,

    hasProjector: false,
    projectorPrice: 0,
    projectorLiquidationPrice: 0,
    projectorUsageTime: 0,
    projectorInstallationTime: 0,
    projectorWorkerSalary: 0,
    projectorPower: 0,

    hasVideoControl: false,
    videoControlPrice: 0,
    videoControlLiquidationPrice: 0,
    videoControlUsageTime: 0,
    videoControlInstallationTime: 0,
    videoControlWorkerSalary: 0,
    videoControlPower: 0,

    hasCartridges: false,
    cartridgesPrice: 0,
    cartridgesLiquidationPrice: 0,
    cartridgesUsageTime: 0,
    cartridgesInstallationTime: 0,
    cartridgesWorkerSalary: 0,
    cartridgesPower: 0,

    hasVideoArchive: false,
    videoArchivePrice: 0,
    videoArchiveLiquidationPrice: 0,
    videoArchiveUsageTime: 0,
    videoArchiveInstallationTime: 0,
    videoArchiveWorkerSalary: 0,
    videoArchivePower: 0,

    hasSecuritySystem: false,
    securitySystemPrice: 0,
    securitySystemLiquidationPrice: 0,
    securitySystemUsageTime: 0,
    securitySystemInstallationTime: 0,
    securitySystemWorkerSalary: 0,
    securitySystemPower: 0,

    hasStaffSalary: false,
    staffSalaryPrice: 0,

    hasInfrastructureMaintenance: false,
    infrastructureMaintenancePrice: 0,

    hasExternalServices: false,
    externalServicesPrice: 0,

    hasSubscriptionsLicenses: false,
    subscriptionsLicensesPrice: 0,

    hasSecuritySystemUpgrade: false,
    securitySystemUpgradePrice: 0,

    hasOtherOperatingExpenses: false,
    otherOperatingExpensesPrice: 0,
    hasFinancialLosses: false,
    financialLossesPrice: 0,

    hasDowntimeLosses: false,
    downtimeLossesPrice: 0,

    hasReputationLosses: false,
    reputationLossesPrice: 0,

    hasLegalConsequencesLosses: false,
    legalConsequencesLossesPrice: 0,

    hasDataLosses: false,
    dataLossesPrice: 0,

    hasContractPenaltyLosses: false,
    contractPenaltyLossesPrice: 0,

    hasCustomerLosses: false,
    customerLossesPrice: 0,
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

  const softwareSections = [
    {
      title: 'Антивирус',
      checkboxName: 'hasAntivirus',
      fields: softwareFormFields.antivirusFields,
    },
    {
      title: 'Фаервол',
      checkboxName: 'hasFirewall',
      fields: softwareFormFields.firewallFields,
    },
    {
      title: 'Предотвращение',
      checkboxName: 'hasPreventionSystem',
      fields: softwareFormFields.preventionSystemFields,
    },
    {
      title: 'Шифрование',
      checkboxName: 'hasEncryption',
      fields: softwareFormFields.encryptionFields,
    },
    {
      title: 'Аутентификация',
      checkboxName: 'hasAuthenticationSystem',
      fields: softwareFormFields.authenticationSystemFields,
    },
    {
      title: 'Безопасность почты',
      checkboxName: 'hasEmailSecurity',
      fields: softwareFormFields.emailSecurityFields,
    },
    {
      title: 'Системы управления уязвимостями',
      checkboxName: 'hasVulnerabilitySystem',
      fields: softwareFormFields.vulnerabilitySystemFields,
    },
    {
      title: 'Резервное копирование и восстановление данных',
      checkboxName: 'hasBackupSystem',
      fields: softwareFormFields.backupSystemFields,
    },
    {
      title: 'Анти-эксплойт ПО',
      checkboxName: 'hasAntiExploitSoftware',
      fields: softwareFormFields.antiExploitSoftwareFields,
    },
    {
      title: 'Средства мониторинга и анализа безопасности (SIEM)',
      checkboxName: 'hasSIEM',
      fields: softwareFormFields.siemFields,
    },
    {
      title: 'Платформы для управления инцидентами безопасности (SOAR)',
      checkboxName: 'hasSOAR',
      fields: softwareFormFields.soarFields,
    },
    {
      title: 'Инструменты для защиты веб-приложений (WAF)',
      checkboxName: 'hasWAF',
      fields: softwareFormFields.wafFields,
    },
    {
      title: 'Системы обнаружения и предотвращения утечек данных (DLP)',
      checkboxName: 'hasDLP',
      fields: softwareFormFields.dlpFields,
    },
    {
      title: 'Тестирование на проникновение (Penetration testing)',
      checkboxName: 'hasPenTesting',
      fields: softwareFormFields.penTestingFields,
    },
    {
      title: 'Системы безопасности от ботнет-атак',
      checkboxName: 'hasBotnetSecurity',
      fields: softwareFormFields.botnetSecurityFields,
    },
    {
      title: 'Криптографические системы',
      checkboxName: 'hasCryptographicKeySystem',
      fields: softwareFormFields.cryptographicKeySystemFields,
    },
    {
      title: 'Средства безопасности стандарта (Safety Standart Means)',
      checkboxName: 'hasSafetyStandartMeans',
      fields: softwareFormFields.safetyStandartMeansFields,
    },
  ];

  const courseSections = [
    {
      title: 'Курсы по информационной безопасности',
      checkboxName: 'hasSecurityCourses',
      fields: studyStaffFormFields.securityCoursesFields,
    },
    {
      title: 'Стоимость времени сотрудников',
      checkboxName: 'hasStaffWorkingTime',
      fields: studyStaffFormFields.staffWorkingTimeFields,
    },
    {
      title: 'Стоимость внутренних тренингов',
      checkboxName: 'hasInnerTraining',
      fields: studyStaffFormFields.innerTrainingFields,
    },
    {
      title: 'Онлайн-курсы и вебинары',
      checkboxName: 'hasOnlineCourses',
      fields: studyStaffFormFields.onlineCoursesFields,
    },
    {
      title: 'Программное обеспечение и оборудование для обучения специалистов',
      checkboxName: 'hasStudyingSoftware',
      fields: studyStaffFormFields.studyingSoftwareFields,
    },
    {
      title: 'Лабораторные комплекты и платформы для тренингов',
      checkboxName: 'hasLabKits',
      fields: studyStaffFormFields.labKitsFields,
    },
    {
      title: 'Участие в конференциях и семинарах по информационной безопасности',
      checkboxName: 'hasSecuritySeminars',
      fields: studyStaffFormFields.securitySeminarsFields,
    },
    {
      title: 'Стоимость билетов и участия в конференциях по информационной безопасности',
      checkboxName: 'hasConferenceTikets',
      fields: studyStaffFormFields.conferenceTiketsFields,
    }
  ]

  const hardwareSections = [
    {
      title: 'Персональные компьютеры',
      checkboxName: 'hasComputer',
      fields: hardwareFormFields.computerFields,
    },
    {
      title: 'Экраны',
      checkboxName: 'hasScreen',
      fields: hardwareFormFields.screenFields,
    },
    {
      title: 'Принтеры',
      checkboxName: 'hasPrinter',
      fields: hardwareFormFields.printerFields,
    },
    {
      title: 'Сканеры',
      checkboxName: 'hasScanner',
      fields: hardwareFormFields.scannerFields,
    },
    {
      title: 'Веб-камеры',
      checkboxName: 'hasWebCamera',
      fields: hardwareFormFields.webCameraFields,
    },
    {
      title: 'Сетевые устройства',
      checkboxName: 'hasNetworkDevices',
      fields: hardwareFormFields.networkDevicesFields,
    },
    {
      title: 'Источники питания',
      checkboxName: 'hasPowerSupply',
      fields: hardwareFormFields.powerSupplyFields,
    },
    {
      title: 'Проекторы',
      checkboxName: 'hasProjector',
      fields: hardwareFormFields.projectorFields,
    },
    {
      title: 'Видеоконтроль',
      checkboxName: 'hasVideoControl',
      fields: hardwareFormFields.videoControlFields,
    },
    {
      title: 'Картриджи',
      checkboxName: 'hasCartridges',
      fields: hardwareFormFields.cartridgesFields,
    },
    {
      title: 'Видеозапись',
      checkboxName: 'hasVideoArchive',
      fields: hardwareFormFields.videoArchiveFields,
    },
    {
      title: 'Система безопасности',
      checkboxName: 'hasSecuritySystem',
      fields: hardwareFormFields.securitySystemFields,
    }
  ]

  const operatingExpensesSections = [
    {
      title: 'Заработная плата сотрудников',
      checkboxName: 'hasStaffSalary',
      fields: operatingExpensesFormFields.staffSalaryFields,
    }
    ,
    {
      title: 'Обслуживание оборудования и инфраструктуры',
      checkboxName: 'hasInfrastructureMaintenance',
      fields: operatingExpensesFormFields.infrastructureMaintenanceFields,
    },
    {
      title: 'Внешние сервисы и консультанты',
      checkboxName: 'hasExternalServices',
      fields: operatingExpensesFormFields.externalServicesFields,
    },
    {
      title: 'Подписки и лицензии',
      checkboxName: 'hasSubscriptionsLicenses',
      fields: operatingExpensesFormFields.subscriptionsLicensesFields,
    },
    {
      title: 'Обслуживание и модернизация системы безопасности',
      checkboxName: 'hasSecuritySystemUpgrade',
      fields: operatingExpensesFormFields.securitySystemUpgradeFields,
    },
    {
      title: 'Прочие операционные расходы',
      checkboxName: 'hasOtherOperatingExpenses',
      fields: operatingExpensesFormFields.otherOperatingExpensesFields,
    },
  ]

  const cyberAttackSections = [
    {
      title: 'Финансовые потери',
      checkboxName: 'hasFinancialLosses',
      fields: cyberAttackFormFields.financialLossesFields,
    },
    {
      title: 'Потери из-за простоя',
      checkboxName: 'hasDowntimeLosses',
      fields: cyberAttackFormFields.downtimeLossesFields,
    },
    {
      title: 'Потери репутации',
      checkboxName: 'hasReputationLosses',
      fields: cyberAttackFormFields.reputationLossesFields,
    },
    {
      title: 'Юридические последствия',
      checkboxName: 'hasLegalConsequencesLosses',
      fields: cyberAttackFormFields.legalConsequencesLossesFields,
    },
    {
      title: 'Потери данных',
      checkboxName: 'hasDataLosses',
      fields: cyberAttackFormFields.dataLossesFields,
    },
    {
      title: 'Штрафные санкции по контрактам',
      checkboxName: 'hasContractPenaltyLosses',
      fields: cyberAttackFormFields.contractPenaltyLossesFields,
    },
    {
      title: 'Потери клиентов',
      checkboxName: 'hasCustomerLosses',
      fields: cyberAttackFormFields.customerLossesFields,
    },
  ]

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
          {softwareSections.map((section, index) => (
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
          {courseSections.map((section, index) => (
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

          <h3 className='form-title'>Расходы на офисное ЭВО</h3>

          <div className="form-group">
            <label>Стоимость электричества:</label>
            <input
              type="number"
              name="electricityCost"
              value={formData.electricityCost}
              onChange={handleChange}
              min="0"
            />
          </div>

          {hardwareSections.map((section, index) => (
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
          
          <h3 className='form-title'>Операционные расходы на информационную безопасность</h3>
          {operatingExpensesSections.map((section, index) => (
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

          <h3 className='form-title'>Потенциальные убытки от кибератак</h3>
          {cyberAttackSections.map((section, index) => (
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
        </div>
      )}
    </div>
  );
}

export default ExpensesForm;