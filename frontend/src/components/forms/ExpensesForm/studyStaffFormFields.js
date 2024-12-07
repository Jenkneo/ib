const baseFields = [
  {
    label: 'Расходы:',
    type: 'number',
    name: 'price',
    min: 0,
  },
];

const fieldsNames = [
  'securityCourses',
  'staffWorkingTime',
  'innerTraining',
  'onlineCourses',
  'studyingSoftware',
  'labKits',
  'securitySeminars',
  'conferenceTikets',
];

const formFields = fieldsNames.reduce((acc, name) => ({
  ...acc,
  [`${name}Fields`]: baseFields.map(field => ({
    ...field,
    name: `${name}${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`,
  })),
}), {});

export default formFields;
