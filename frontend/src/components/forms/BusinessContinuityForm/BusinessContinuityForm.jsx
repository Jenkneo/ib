import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import cyberAttackFormFields from './cyberAttackFormFields';

function HardwareForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    initialCost: 0,
    operationalExpenses: 0,
    maintenanceCosts: 0,
    otherExpenses: 0,
    exploitationPeriod: 0,

    hasNetProfit: false,
    netProfitExpenses: 0,
    netProfitLosses: 0,
    
    hasReturnOnInvestment: false,
    returnOnInvestmentExpenses: 0,
    returnOnInvestmentLosses: 0,
    
    hasDowntimeSum: false,
    downtimeSumExpenses: 0,
    downtimeSumLosses: 0,
    
    hasRecoveryCost: false,
    recoveryCostExpenses: 0,
    recoveryCostLosses: 0,
  });

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let total = 0;

    onCalculate(total);
  }, [formData, isEnabled, onCalculate]); // eslint-disable-line

  useEffect(() => {
    if (isEnabled) {
      calculateTotal();
    } else {
      onCalculate(0);
    }
  }, [isEnabled, calculateTotal, onCalculate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  const handleBoolChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  const cyberAttackSections = [
    {
      title: 'Убытки от простоя',
      checkboxName: 'hasNetProfit',
      fields: cyberAttackFormFields.netProfitFields,
    },
    {
      title: 'Доходность инвестиций',
      checkboxName: 'hasReturnOnInvestment',
      fields: cyberAttackFormFields.returnOnInvestmentFields,
    },
    {
      title: 'Стоимость восстановления',
      checkboxName: 'hasDowntimeSum',
      fields: cyberAttackFormFields.downtimeSumFields,
    },
    {
      title: 'Стоимость восстановления',
      checkboxName: 'hasRecoveryCost',
      fields: cyberAttackFormFields.recoveryCostFields,
    },
  ]

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <h3>Расчет экономической эффективности бизнеса и непрерывности бизнеса</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">

          <label>Метод расчета экономической эффективности бизнеса, как правило, рассчитывается через показатель возврата на инвестиции (ROI), который позволяет измерить доходность инвестиций и понять, насколько выгодно для компании вкладывать средства в определенные бизнес-процессы или проекты.</label>
          {cyberAttackSections.map((section, index) => (
            <FormSection
              key={index} // Уникальный ключ для списка
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              onFieldChange={handleChange}
            />
          ))}

        </div>
      )}
    </div>
  );
}

export default HardwareForm;