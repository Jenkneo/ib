const baseFields = [
  {
    label: 'Стоимость:',
    type: 'number',
    name: 'price',
    min: 0,
  },
  {
    label: 'Срок установки и настройки:',
    type: 'number',
    name: 'period',
    min: 0,
  },
  {
    label: 'Заработная плата сотрудника:',
    type: 'number',
    name: 'workerSalary',
    min: 0,
  }
];

const fieldsNames = [
  'antivirus',
  'preventionSystem',
  'encryption',
  'authenticationSystem',
  'emailSecurity',
  'vulnerabilitySystem',
  'backupSystem',
  'antiExploitSoftware',
  'siem',
  'soar',
  'waf',
  'dlp',
  'penTesting',
  'botnetSecurity',
  'cryptographicKeySystem',
  'safetyStandartMeans',
  'firewall',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
