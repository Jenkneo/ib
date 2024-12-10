import softwareFormFields from './softwareFormFields';
import hardwareFormFields from './hardwareFormFields';
import operatingExpensesFormFields from './operatingExpensesFormFields';
import cyberAttackFormFields from './cyberAttackFormFields';
import studyStaffFormFields from './studyStaffFormFields';

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

export const operatingExpensesSections = [
  {
    title: 'Заработная плата сотрудников',
    checkboxName: 'hasStaffSalary',
    fields: operatingExpensesFormFields.staffSalaryFields,
  },
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

export const courseSections = [
  {
    title: 'Стоимость обучения сотрудников',
    checkboxName: 'hasWorker',
    fields: studyStaffFormFields.workerFields,
  },
]