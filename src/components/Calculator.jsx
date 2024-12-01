import React from 'react';
import HardwareForm from './forms/HardwareForm';
import SoftwareForm from './forms/SoftwareForm';
import PersonnelForm from './forms/PersonnelForm';

function Calculator() {
  return (
    <div>
      <h2 className="form-title">Расчет стоимости защиты информации</h2>
      <HardwareForm />
      <SoftwareForm />
      <PersonnelForm />
    </div>
  );
}

export default Calculator;