import softwareFormFields from './Fields/softwareFormFields';
import hardwareFormFields from './Fields/hardwareFormFields';
import cyberAttackFormFields from './Fields/cyberAttackFormFields';
import studyStaffFormFields from './Fields/studyStaffFormFields';

export const softwareSections = [
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
    title: 'Системы предотвращения и обнаружения вторжений (IDS/IPS)',
    checkboxName: 'hasPreventionSystem',
    fields: softwareFormFields.preventionSystemFields,
  },
  {
    title: 'Шифрование',
    checkboxName: 'hasEncryption',
    fields: softwareFormFields.encryptionFields,
  },
  {
    title: 'Управление доступом и аутентификация',
    checkboxName: 'hasAuthenticationSystem',
    fields: softwareFormFields.authenticationSystemFields,
  },
  {
    title: 'Решения для защиты электронной почты',
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
    title: 'Тестирование на проникновение',
    checkboxName: 'hasPenTesting',
    fields: softwareFormFields.penTestingFields,
  },
  {
    title: 'Защита от ботнетов',
    checkboxName: 'hasBotnetSecurity',
    fields: softwareFormFields.botnetSecurityFields,
  },
  {
    title: 'Системы для управления криптографическими ключами',
    checkboxName: 'hasCryptographicKeySystem',
    fields: softwareFormFields.cryptographicKeySystemFields,
  },
  {
    title: 'Средства для соблюдения норм и стандартов безопасности',
    checkboxName: 'hasSafetyStandartMeans',
    fields: softwareFormFields.safetyStandartMeansFields,
  },
];

export const softwareVariables = {
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
  safetyStandartMeansWorkerSalary: 0
}

export const hardwareSections = [
  {
    title: 'Персональные компьютеры',
    checkboxName: 'hasComputer',
    fields: hardwareFormFields.computerFields,
  },
  {
    title: 'Мониторы',
    checkboxName: 'hasScreen',
    fields: hardwareFormFields.screenFields,
  },
  {
    title: 'Принтеры и МФУ',
    checkboxName: 'hasPrinter',
    fields: hardwareFormFields.printerFields,
  },
  {
    title: 'Сканеры',
    checkboxName: 'hasScanner',
    fields: hardwareFormFields.scannerFields,
  },
  {
    title: 'Клавиатуры и мыши',
    checkboxName: 'hasKeyboard',
    fields: hardwareFormFields.keyboardFields,
  },
  {
    title: 'Веб-камеры и микрофоны',
    checkboxName: 'hasWebCamera',
    fields: hardwareFormFields.webCameraFields,
  },
  {
    title: 'Сетевые устройства',
    checkboxName: 'hasNetworkDevices',
    fields: hardwareFormFields.networkDevicesFields,
  },
  {
    title: 'Системы бесперебойного питания (UPS)',
    checkboxName: 'hasPowerSupply',
    fields: hardwareFormFields.powerSupplyFields,
  },
  {
    title: 'Проекторы',
    checkboxName: 'hasProjector',
    fields: hardwareFormFields.projectorFields,
  },
  {
    title: 'Системы видеонаблюдения и контроля доступа',
    checkboxName: 'hasVideoControl',
    fields: hardwareFormFields.videoControlFields,
  },
  {
    title: 'Телеконференцсистемы',
    checkboxName: 'hasConference',
    fields: hardwareFormFields.conferenceFields,
  },
  {
    title: 'Сетевые хранилища (NAS)',
    checkboxName: 'hasNetworkStorage',
    fields: hardwareFormFields.networkStorageFields,
  },
  {
    title: 'Картриджи и расходные материалы',
    checkboxName: 'hasCartridges',
    fields: hardwareFormFields.cartridgesFields,
  },
  {
    title: 'Системы видеозаписи и архивирования',
    checkboxName: 'hasVideoArchive',
    fields: hardwareFormFields.videoArchiveFields,
  },
  {
    title: 'Системы безопасности и защиты данных',
    checkboxName: 'hasSecuritySystem',
    fields: hardwareFormFields.securitySystemFields,
  }
]

export const hardwareVariables = {
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
  }

export const courseSections = [
  {
    title: 'Стоимость обучения сотрудников',
    checkboxName: 'hasWorker',
    fields: studyStaffFormFields.workerFields,
  },
]

export const courseVariables = {
  hasWorker: false,
  workerPrice: 0,
  workerAmount: 0,
}

export const cyberAttackSections = [
  {
    title: 'Штрафы от нарушения контрактов',
    checkboxName: 'hasContractsPenalty',
    fields: cyberAttackFormFields.contractsPenaltyFields,
  },
  {
    title: 'Юридические последствия',
    checkboxName: 'hasLegalConsequences',
    fields: cyberAttackFormFields.legalConsequencesFields,
  },
  {
    title: 'Потери из-за утраты репутации',
    checkboxName: 'hasReputationLosses',
    fields: cyberAttackFormFields.reputationLossesFields,
  },
  {
    title: 'Потери из-за утраты данных',
    checkboxName: 'hasDataLosses',
    fields: cyberAttackFormFields.dataLossesFields,
  },
  {
    title: 'Потери из-за простоя',
    checkboxName: 'hasDowntimeLosses',
    fields: cyberAttackFormFields.downtimeLossesFields,
  }
]

export const cyberAttackVariables = {
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
}