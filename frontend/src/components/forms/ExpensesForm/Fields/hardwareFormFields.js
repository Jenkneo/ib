const baseFields = [
  {
    label: 'Стоимость оборудорования:',
    type: 'number',
    name: 'price',
    min: 0,
  },
  {
    label: 'Ликвидационная стоимость:',
    type: 'number',
    name: 'liquidationPrice',
    min: 0,
  },
  {
    label: 'Срок полезного использования (час/день):',
    type: 'number',
    name: 'usageTime',
    min: 0,
  },
  {
    label: 'Срок установки и настройки оборудования (в часах):',
    type: 'number',
    name: 'installationTime',
    min: 0,
  },
  {
    label: 'Заработная плату сотрудника:',
    type: 'number',
    name: 'workerSalary',
    min: 0,
  },
  {
    label: 'Укажите мощность оборудования(в кВт):',
    type: 'number',
    name: 'power',
    min: 0,
  }
];

const fieldsNames = [
  'computer',
  'screen',
  'printer',
  'scanner',
  'keyboard',
  'webCamera',
  'networkDevices',
  'powerSupply',
  'projector',
  'videoControl',
  'conference',
  'networkStorage',
  'cartridges',
  'videoArchive',
  'securitySystem',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
