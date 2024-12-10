import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import { softwareSections, hardwareSections, operatingExpensesSections, cyberAttackSections, courseSections } from './sections';

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

    hasKeyboard: false,
    keyboardPrice: 0,
    keyboardLiquidationPrice: 0,
    keyboardUsageTime: 0,
    keyboardInstallationTime: 0,
    keyboardWorkerSalary: 0,
    keyboardPower: 0,

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

    hasConference: false,
    conferencePrice: 0,
    conferenceLiquidationPrice: 0,
    conferenceUsageTime: 0,
    conferenceInstallationTime: 0,
    conferenceWorkerSalary: 0,
    conferencePower: 0,

    hasNetworkStorage: false,
    networkStoragePrice: 0,
    networkStorageLiquidationPrice: 0,
    networkStorageUsageTime: 0,
    networkStorageInstallationTime: 0,
    networkStorageWorkerSalary: 0,
    networkStoragePower: 0,

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

    hasWorker: false,
    workerPrice: 0,
    workerAmount: 0,

    hasContractsPenalty: false,
    contractsPenaltyPrice: 0,

    hasLegalConsequences: false,
    legalConsequencesPrice: 0,

    hasReputationLosses: false,
    reputationLossesPrice: 0,

    hasDataLosses: false,
    dataLossesPrice: 0,

    hasDowntimeLosses: false,
    downtimeLossesPrice: 0,
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


        </div>
      )}
    </div>
  );
}

export default ExpensesForm;