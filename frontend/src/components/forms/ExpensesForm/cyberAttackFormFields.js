const baseFields = [
  {
    label: 'Убытки:',
    type: 'number',
    name: 'price',
    min: 0,
  },
];

const fieldsNames = [
  'contractsPenalty',
  'legalConsequences',

  'financialLosses',
  'downtimeLosses',
  'reputationLosses',
  'legalConsequencesLosses',
  'dataLosses',
  'contractPenaltyLosses',
  'customerLosses',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
