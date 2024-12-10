const baseFields = [
  {
    label: 'Стоимость обучения для 1-го сотрудника:',
    type: 'number',
    name: 'price',
    min: 0,
  },
  {
    label: 'Количество сотрудников:',
    type: 'number',
    name: 'amount',
    min: 0,
  },
];

const fieldsNames = [
  'worker',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
