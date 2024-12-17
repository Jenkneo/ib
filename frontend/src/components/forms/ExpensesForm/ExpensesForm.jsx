import React, { useState, useEffect, useCallback } from 'react';
import FormSection from './FormSection';
import { 
  softwareSections, softwareVariables,
  hardwareSections, hardwareVariables,
  cyberAttackSections, cyberAttackVariables, 
  courseSections, courseVariables
} from './sections';


function ExpensesForm({ onCalculate, onDataChange }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [localData, setLocalData] = useState("Исходные данные из ChildOne");
  const [formData, setFormData] = useState({
    ...softwareVariables,
    electricityCost: 0,
    ...hardwareVariables,
    ...cyberAttackVariables,
    ...courseVariables,

    assetPrice: 0,
    impactFactor: 0,
    incidentFrequency: 0,
    occurrencePeriod: 1, 

    equipmentPrice: 0,
    oftenEquipmentPrice: 0,

    recoveryTime: 0,
    workerHourPrice: 0,
  });

  // Автоматически передаем данные в родителя при их изменении
  useEffect(() => {
    onDataChange(localData); // Вызываем родительскую функцию
  }, [localData, onDataChange]);

  // Симулируем изменение данных (например, на основе времени)
  
  const softwareTotal = useCallback(() => {
    let total = 0;
    Object.keys(softwareVariables).forEach(key => {
      if (key.startsWith('has')) {
        const varName = key.replace('has', '').replace(/^./, str => str.toLowerCase());
        if (formData[key]) {
          total += formData[`${varName}Price`] + formData[`${varName}Period`] * formData[`${varName}WorkerSalary`];
        }
      }
    });
    return total;
  }, [formData]);

  const hardwareTotal = useCallback(() => {
    let total = 0;
    Object.keys(hardwareVariables).forEach(key => {
      if (key.startsWith('has')) {
        const varName = key.replace('has', '').replace(/^./, str => str.toLowerCase());
        if (formData[key]) {
          total += (formData[`${varName}UsageTime`] * 365) + (formData[`${varName}Power`] * formData.electricityCost) + (formData[`${varName}InstallationTime`] * formData[`${varName}WorkerSalary`]);
        }
      }
    });
    return total;
  }, [formData]);

  const cyberAttackTotal = useCallback(() => {
    let total = 0;
    Object.keys(cyberAttackVariables).forEach(key => {
      if (key.startsWith('has')) {
        const varName = key.replace('has', '').replace(/^./, str => str.toLowerCase());
        if (formData[key]) {
          total += formData[`${varName}Price`];
        }
      }
    });
    return total;
  }, [formData]);

  const studyStaffTotal = useCallback(() => {
    let total = 0;
    Object.keys(courseVariables).forEach(key => {
      if (key.startsWith('has')) {
        const varName = key.replace('has', '').toLowerCase();
        if (formData[key]) {
          total += formData[`${varName}Price`] * formData[`${varName}Amount`];
        }
      }
    });
    return total;
  }, [formData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalData(
        {
          softwareTotal: softwareTotal(),
          hardwareTotal: hardwareTotal(),
          cyberAttackTotal: cyberAttackTotal(),
          courseTotal: studyStaffTotal(),
          incidentCost: (formData.assetPrice * formData.impactFactor * (formData.incidentFrequency / (formData.occurrencePeriod > 0 ? formData.occurrencePeriod : 1))),
          safetyMeasuresCost: (formData.equipmentPrice + formData.oftenEquipmentPrice),
          recoveryCost: ((formData.recoveryTime * formData.workerHourPrice) + cyberAttackTotal() + hardwareTotal() + softwareTotal()),
        }
      );
    }, 1000); // Обновляем данные каждую секунду

    return () => clearTimeout(timer);
  }, [cyberAttackTotal, formData.assetPrice, formData.equipmentPrice, formData.impactFactor, formData.incidentFrequency, formData.occurrencePeriod, formData.oftenEquipmentPrice, formData.recoveryTime, formData.workerHourPrice, hardwareTotal, softwareTotal, studyStaffTotal]);


  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;
    
    const total = 0;
    
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleBoolChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <h3>Информация о расходах</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          <h3 className='form-title'>Расходы на программное обеспечение для информационной безопасности</h3>
          {softwareSections.map((section, index) => (
            <FormSection
              key={index}
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

          <h3 className='form-title'>Расходы на офисное ЭВО</h3>
          <div className="form-group">
            <label>Стоимость электричества:</label>
            <input
              type="number"
              name="electricityCost"
              value={formData.electricityCost}
              onChange={handleChange}
              min="0"
            />
          </div>

          {hardwareSections.map((section, index) => (
            <FormSection
              key={index}
              title={section.title}
              checkboxName={section.checkboxName}
              isChecked={formData[section.checkboxName]}
              onCheckboxChange={handleBoolChange}
              fields={section.fields.map((field) => ({
                ...field,
                value: formData[field.name],
              }))}
              electricityCost={formData.electricityCost}
              onFieldChange={handleChange}
            />
          ))}

          <h3 className='form-title'>Расходы на обучение специалистов по информационной безопасности</h3>
          {courseSections.map((section, index) => (
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

          <h3 className='form-title'>Потенциальные убытки от кибератак</h3>
          {cyberAttackSections.map((section, index) => (
            <FormSection
              key={index}
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

          <h3 className='form-title'>Расчет стоимости угроз и инцидентов</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Стоимость актива</label>
              <input
                type="number"
                name="assetPrice"
                value={formData.assetPrice}
                onChange={handleChange}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>Коэффициент воздействия, отражающий процент ущерба актива при реализации угрозы (в диапазоне от 0 до 1)</label>
              <input
                type="number"
                name="impactFactor"
                value={formData.impactFactor}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Частота возникновения инцидента</label>
              <input
                type="number"
                name="incidentFrequency"
                value={formData.incidentFrequency}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Укажите срок возникновения инцидента в годах</label>
              <input
                type="number"
                name="occurrencePeriod"
                value={formData.occurrencePeriod}
                onChange={handleChange}
                min="0"
              />
            </div>

            {formData.occurrencePeriod !== 0 ? (
              <h3>Общая стоимость: {formData.assetPrice * formData.impactFactor * (formData.incidentFrequency / formData.occurrencePeriod)}</h3>
            ) : (
              <h3>Заполните поле "Срок возникновения инцидента"</h3>
            )}

          </div>

          <h3 className='form-title'>Расчет стоимости внедрения защитных мер</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Единовременные затраты на покупку оборудование или ПО</label>
              <input
                type="number"
                name="equipmentPrice"
                value={formData.equipmentPrice}
                onChange={handleChange}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>Постоянные затраты на обслуживание</label>
              <input
                type="number"
                name="oftenEquipmentPrice"
                value={formData.oftenEquipmentPrice}
                onChange={handleChange}
                min="0"
              />
            </div>

            <h3>Общая стоимость: {formData.equipmentPrice + formData.oftenEquipmentPrice}</h3>

          </div>

          <h3 className='form-title'>Расчет стоимости восстановления после инцидента</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Укажите время, затраченное на восстановление в часах</label>
              <input
                type="number"
                name="recoveryTime"
                value={formData.recoveryTime}
                onChange={handleChange}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>Укажите стоимость человека-часа</label>
              <input
                type="number"
                name="workerHourPrice"
                value={formData.workerHourPrice}
                onChange={handleChange}
                min="0"
              />
            </div>
            <h3>Общая стоимость: {(formData.recoveryTime * formData.workerHourPrice) + cyberAttackTotal() + hardwareTotal() + softwareTotal()} </h3>
          </div>

            <h1 className='form-title'>Итого, расходы на информационную безопасность составляют: {
            softwareTotal() + hardwareTotal() + studyStaffTotal() + cyberAttackTotal() + 
            (formData.assetPrice * formData.impactFactor * (formData.incidentFrequency / (formData.occurrencePeriod > 0 ? formData.occurrencePeriod : 1))) +
            (formData.equipmentPrice + formData.oftenEquipmentPrice) + 
            ((formData.recoveryTime * formData.workerHourPrice) + cyberAttackTotal() + hardwareTotal() + softwareTotal())
            }</h1>

        </div>
      )}
    </div>
  );
}

export default ExpensesForm;