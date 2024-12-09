const baseFields = [
  {
    label: 'Сумма предотвращенных потерь',
    type: 'number',
    name: 'expenses',
    min: 0,
  },
  {
    label: 'Операционные расходы',
    type: 'number',
    name: 'losses',
    min: 0,
  },
];

const fieldsNames = [
  'netProfit',
  'returnOnInvestment',
  'downtimeSum',
  'recoveryCost',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
