const firewallFields = [
  {
    label: 'Стоимость Фаервола:',
    type: 'number',
    name: 'firewallPrice',
    min: 0,
  },
  {
    label: 'Срок установки и настройки:',
    type: 'number',
    name: 'firewallPeriod',
    min: 0,
  },
  {
    label: 'Заработная плата сотрудника:',
    type: 'number',
    name: 'firewallWorkerSalary',
    min: 0,
  },
  {
    label: 'Стоимость подписок и лицензий:',
    type: 'number',
    name: 'firewallSubscription',
    min: 0,
  },
];

const vpnFields = [
  {
    label: 'Стоимость VPN:',
    type: 'number',
    name: 'vpnPrice',
    min: 0,
  },
  {
    label: 'Срок настройки VPN:',
    type: 'number',
    name: 'vpnPeriod',
    min: 0,
  },
  {
    label: 'Количество пользователей:',
    type: 'number',
    name: 'vpnUsers',
    min: 1,
  },
];

const formFields = {
  firewallFields,
  vpnFields,
};

export default formFields;
