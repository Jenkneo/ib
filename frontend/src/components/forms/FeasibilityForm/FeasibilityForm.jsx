import React, { useState, useEffect, useCallback } from 'react';
import Select from 'react-select';
import taskTypeCoefficientTable from './taskTypeCoefficientTable';

function FeasibilityForm({ receivedData, onDataChange }) {
  const [isEnabled, setIsEnabled] = useState(false);  
  const [localData, setLocalData] = useState();
  const [formData, setFormData] = useState({
    feasibilityRatio: 0,
    levelTypes: 'low',
    groupDifficulty: 'first',
    noveltyDegree: 'groupA',
    changeConsiderationCoefficient: 1.2,
    qualificationCoefficient: 0.8,
    documentationTime: 0,

    monthlySalary: 0,
    totalDevelopmentTime: 0,
    workingDaysInMonth: 0,
    workingHoursInDay: 0,

    employeeSalary: 0,
    businessType: 'usual',
    professionalRiskClass: '0.2',

    singlePCPeripheralCost: 0,
    usefulLifeSpan: 0,
    annualEffectiveOperatingTime: 0,
    costPerKw: 0,
    totalPCPeripheralPower: 0,
    totalLightingPower: 0,

    savingsOnAutomation: 0,
    annualSavings: 0,
    additionalExpenses: 0,

    threatProbability: 0,
    possibleLosses: 0,
    remainingRisk: 0,

    taskTypeCoefficient: 0,
  });

  // Автоматически передаем данные в родителя при их изменении
  useEffect(() => {
    onDataChange(localData); // Вызываем родительскую функцию
  }, [localData, onDataChange]);
  

  const levelTypes = [
    { value: 'high', label: 'Высокий уровень' },
    { value: 'low', label: 'Низкий уровень' },
  ];

  const groupDifficulty = [
    { value: 'first', label: '1 – алгоритмы оптимизации и моделирования систем' },
    { value: 'second', label: '2 – задачи учета, отчетности и статистики' },
    { value: 'third', label: '3 – стандартные алгоритмы' },
  ];

  const noveltyDegree = [
    { value: 'groupA', label: 'группа А – разработка принципиально новых задач' },
    { value: 'groupB', label: 'группа Б – разработка оригинальных программ' },
    { value: 'groupC', label: 'группа В – разработка программ с использованием типовых решений' },
    { value: 'groupD', label: 'группа Г – разовая типовая задача' },
  ];

  const businessType = [
    { value: 'usual', label: 'Обычный' },
    { value: 'itCompany', label: 'IT-компания' },
    { value: 'usn', label: 'УСН' },
    { value: 'agriculture', label: 'Сельское хозяйство' },
    { value: 'residientOez', label: 'Резидент ОЭЗ' },
  ];

  const professionalRiskClass = [
    { value: '0.2', label: '1 класс' },
    { value: '0.3', label: '2 класс' },
    { value: '0.4', label: '3 класс' },
    { value: '0.5', label: '4 класс' },
    { value: '0.6', label: '5 класс' },
    { value: '0.7', label: '6 класс' },
    { value: '0.8', label: '7 класс' },
    { value: '0.9', label: '8 класс' },
    { value: '1', label: '9 класс' },
    { value: '1.1', label: '10 класс' },
    { value: '1.2', label: '11 класс' },
    { value: '1.3', label: '12 класс' },
    { value: '1.4', label: '13 класс' },
    { value: '1.5', label: '14 класс' },
    { value: '1.7', label: '15 класс' },
    { value: '1.9', label: '16 класс' },
    { value: '2.1', label: '17 класс' },
    { value: '2.3', label: '18 класс' },
    { value: '2.5', label: '19 класс' },
    { value: '2.8', label: '20 класс' },
    { value: '3.1', label: '21 класс' },
    { value: '3.4', label: '22 класс' },
    { value: '3.7', label: '23 класс' },
    { value: '4.1', label: '24 класс' },
    { value: '4.5', label: '25 класс' },
    { value: '5', label: '26 класс' },
    { value: '5.6', label: '27 класс' },
    { value: '6.1', label: '28 класс' },
    { value: '6.7', label: '29 класс' },
    { value: '7.4', label: '30 класс' },
    { value: '8.1', label: '31 класс' },
    { value: '8.5', label: '32 класс' },
  ];

  const taskTypeCoefCalc = useCallback(() => {
    formData.taskTypeCoefficient = taskTypeCoefficientTable[formData.levelTypes][formData.groupDifficulty][formData.noveltyDegree]; // 

    return formData.taskTypeCoefficient;
  }, [formData]);

  const workerSalaryCalculations = useCallback(() => {
    if (!((formData.workingDaysInMonth >= 1 && formData.workingDaysInMonth <= 31) && (formData.workingHoursInDay >= 1 && formData.workingHoursInDay <= 12))) {
      return null;
    }
    return parseFloat(((formData.monthlySalary * formData.totalDevelopmentTime) / (formData.workingDaysInMonth * formData.workingHoursInDay)).toFixed(2));
  }, [formData.workingDaysInMonth, formData.workingHoursInDay, formData.monthlySalary, formData.totalDevelopmentTime]);

  const systemCalculations = useCallback(() => {
    const Q = formData.feasibilityRatio * taskTypeCoefCalc();
    if (formData.feasibilityRatio < 1400 || formData.feasibilityRatio > 5500 ||
        formData.qualificationCoefficient < 0.8 || formData.qualificationCoefficient > 1.5 || 
        formData.changeConsiderationCoefficient < 1.2 || formData.changeConsiderationCoefficient > 1.5 || 
        formData.documentationTime < 3 || formData.documentationTime > 8) {
      return null;
    }
    const taskDescriptionTime = parseFloat(((Q * formData.changeConsiderationCoefficient) / (50 * formData.qualificationCoefficient)).toFixed(2));
    const algorithmDevelopmentTime = parseFloat((Q / (50 * formData.qualificationCoefficient)).toFixed(2));
    const flowchartDevelopmentTime = parseFloat((Q / (50 * formData.qualificationCoefficient)).toFixed(2));
    const programmingTime = parseFloat(((Q * 1.5) / (50 * formData.qualificationCoefficient)).toFixed(2));
    const programTypingTime = parseFloat((Q / 50).toFixed(2));
    const debuggingTestingTime = parseFloat(((Q * 4) / (50 * formData.qualificationCoefficient)).toFixed(2));
    const documentationTime = parseFloat((formData.documentationTime * 8).toFixed(2));
    const total = parseFloat((taskDescriptionTime + algorithmDevelopmentTime + flowchartDevelopmentTime + programmingTime + programTypingTime + debuggingTestingTime + documentationTime + 40).toFixed(2));
    return {
      taskDescriptionTime,
      algorithmDevelopmentTime,
      flowchartDevelopmentTime,
      programmingTime,
      programTypingTime,
      debuggingTestingTime,
      documentationTime,
      total,
    };
  }, [formData.changeConsiderationCoefficient, formData.documentationTime, formData.feasibilityRatio, formData.qualificationCoefficient, taskTypeCoefCalc]);

  const insuranceContributionsCalculations = useCallback(() => {
    let pensionFund = 0;
    let medicalInsuranceFund = 0;
    let socialInsuranceFund = 0;
    let injuryContributions = 0;

    const rates = {
      usual: {        pension: 0.22, medical: 0.051,  social: 0.029,  injury: formData.professionalRiskClass },
      itCompany: {    pension: 0.06, medical: 0,      social: 0.029,  injury: formData.professionalRiskClass },
      usn: {          pension: 0.06, medical: 0,      social: 0.029,  injury: formData.professionalRiskClass },
      agriculture: {  pension: 0.06, medical: 0,      social: 0,      injury: formData.professionalRiskClass },
      residientOez: { pension: 0.06, medical: 0.051,  social: 0,      injury: 0.2 },
    };

    const { pension, medical, social, injury } = rates[formData.businessType] || {};

    pensionFund = parseFloat((formData.employeeSalary * pension).toFixed(2));
    medicalInsuranceFund = parseFloat((formData.employeeSalary * medical).toFixed(2));
    socialInsuranceFund = parseFloat((formData.employeeSalary * social).toFixed(2));
    injuryContributions = parseFloat((formData.employeeSalary * injury / 100).toFixed(2));

    let totalContributions = parseFloat((pensionFund + medicalInsuranceFund + socialInsuranceFund + injuryContributions).toFixed(2));
    return {
      pensionFund,
      medicalInsuranceFund,
      socialInsuranceFund,
      injuryContributions,
      totalContributions
    };
  }, [formData.businessType, formData.employeeSalary, formData.professionalRiskClass]);

  const calculationOfExpensesForComputerMaintenance = useCallback(() => {
    if (formData.usefulLifeSpan <= 0) return null;
    let annualAmortization = parseFloat((100 / formData.usefulLifeSpan).toFixed(2));
    let amortizationExpenses = parseFloat((formData.singlePCPeripheralCost * annualAmortization / 100).toFixed(2));
    let electricityExpenses = parseFloat((formData.annualEffectiveOperatingTime * formData.costPerKw * (formData.totalPCPeripheralPower + formData.totalLightingPower)).toFixed(2));
    let totalAnnualExpenses = parseFloat((amortizationExpenses + electricityExpenses).toFixed(2));
    if (totalAnnualExpenses <= 0) return null;
    let costPerMachineHour = parseFloat((totalAnnualExpenses / formData.annualEffectiveOperatingTime).toFixed(2));

    return {
      annualAmortization,
      amortizationExpenses,
      electricityExpenses,
      totalAnnualExpenses,
      costPerMachineHour
    }
  }, [formData.annualEffectiveOperatingTime, formData.costPerKw, formData.totalLightingPower, formData.totalPCPeripheralPower, formData.usefulLifeSpan, formData.singlePCPeripheralCost]);

  const softwareCostCalculations = useCallback(() => {
    if (!(workerSalaryCalculations() && insuranceContributionsCalculations() && calculationOfExpensesForComputerMaintenance())) return null;
    let softwareCost = workerSalaryCalculations() + insuranceContributionsCalculations().totalContributions + calculationOfExpensesForComputerMaintenance().totalAnnualExpenses;
    return parseFloat(softwareCost.toFixed(2));
  }, [calculationOfExpensesForComputerMaintenance, insuranceContributionsCalculations, workerSalaryCalculations]);

  const calculationOfPaybackPeriod = useCallback(() => {
    if (formData.savingsOnAutomation + formData.annualSavings + formData.additionalExpenses <= 0) return null;

    return parseFloat((softwareCostCalculations() / (formData.savingsOnAutomation + formData.annualSavings - formData.additionalExpenses)).toFixed(2));
  }, [formData.additionalExpenses, formData.annualSavings, formData.savingsOnAutomation, softwareCostCalculations]);

  const calculationFeasibilityTotal = useCallback(() => {
    if (!receivedData) return null;
    const threatPreventionBenefit = parseFloat((((formData.possibleLosses * formData.threatProbability) - (formData.possibleLosses * formData.remainingRisk))/100).toFixed(2));
    const economicEfficiencyImplementation = softwareCostCalculations() ? parseFloat((threatPreventionBenefit - softwareCostCalculations()) / softwareCostCalculations()).toFixed(2) : 'не определено';
    const informationSecurityExpenses = parseFloat(Object.values(receivedData).reduce((acc, value) => acc + value, 0).toFixed(2));
    const paybackPeriod = threatPreventionBenefit !== 0 ? 
      parseFloat((softwareCostCalculations() / threatPreventionBenefit).toFixed(2)) : 
      'не определен';
    const lossPreventionCoefficient = parseFloat((threatPreventionBenefit / informationSecurityExpenses) * 100).toFixed(4);
    return {
      threatPreventionBenefit,
      economicEfficiencyImplementation,
      informationSecurityExpenses,
      paybackPeriod,
      lossPreventionCoefficient
    }
  }, [receivedData, formData.threatProbability, formData.remainingRisk, formData.possibleLosses, softwareCostCalculations]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (parseFloat(value) || 0)
    }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption.value
    }));
  };

    useEffect(() => {
      const timer = setTimeout(() => {
        setLocalData(
          {
            systemCalculations: systemCalculations(),
            workerSalaryCalculations: workerSalaryCalculations(),
            insuranceContributionsCalculations: insuranceContributionsCalculations(),
            calculationOfExpensesForComputerMaintenance: calculationOfExpensesForComputerMaintenance(),
            softwareCost: softwareCostCalculations(),
            calculationOfPaybackPeriod: calculationOfPaybackPeriod(),
            calculationFeasibilityTotal: calculationFeasibilityTotal(),
          }
        );
      }, 1000); // Обновляем данные каждую секунду
  
      return () => clearTimeout(timer);
    }, [systemCalculations, workerSalaryCalculations, insuranceContributionsCalculations, calculationOfExpensesForComputerMaintenance, softwareCostCalculations, calculationOfPaybackPeriod, calculationFeasibilityTotal]);
  

  return (
    <div className="form-container">
      <div className="form-header">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <h3>Технико-экономическое обоснование для разрабатываемой системы</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
          {/* Основные параметры */}
          <div className="form-section">
            <h4>Основные параметры</h4>
            <div className="form-group">
              <label>Определите и введите значение коэффициента условного числа команд пользуются следующими ориентировочными значениями</label>
              <ul className='list'>
                <li>Задачи учета: от 1400 до 1500</li>
                <li>Задачи оперативного управления: от 1500 до 1700</li>
                <li>Задачи планирования: от 3000 до 3500</li>
                <li>Многовариантные задачи: от 4500 до 5000</li>
                <li>Комплексные задачи: от 5000 до 5500</li>
              </ul>
              <label>Введите значение коэффициента</label>
              <input
                type="number"
                name="feasibilityRatio"
                value={formData.feasibilityRatio}
                onChange={handleChange}
                min="0"
              />
            </div>

            <label>Для коэффициента, учитывающего новизну и сложность программы необходимо:</label>

            <div className="form-group">
              <label>Определить уровень языка программирования:</label>
              <Select
                options={levelTypes}
                value={levelTypes.find(type => type.value === formData.levelTypes)}
                onChange={(option) => handleSelectChange(option, { name: 'levelTypes' })}
                className="react-select"
              />
            </div>

            <div className="form-group">
              <label>Определить группу сложности:</label>
              <Select
                options={groupDifficulty}
                value={groupDifficulty.find(type => type.value === formData.groupDifficulty)}
                onChange={(option) => handleSelectChange(option, { name: 'groupDifficulty' })}
                className="react-select"
              />
            </div>

            <div className="form-group">
              <label>Определить степень новизны:</label>
              <Select
                options={noveltyDegree}
                value={noveltyDegree.find(type => type.value === formData.noveltyDegree)}
                onChange={(option) => handleSelectChange(option, { name: 'noveltyDegree' })}
                className="react-select"
              />
            </div>

            <div className="form-group">
              <label>Укажите коэффициент учета изменений задачи. Коэффициент в зависимости от сложности задачи и числа изменений выбирается в интервале от 1,2 до 1,5:</label>
              <input
                type="number"
                name="changeConsiderationCoefficient"
                value={formData.changeConsiderationCoefficient}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Укажите коэффициент, учитывающий квалификацию программиста</label>
              <label>Стаж программиста:</label>
              <ul className='list'>
                <li>до 2-х лет: К=0,8</li>
                <li>от 2 до 3 лет: К=1,0</li>
                <li>от 3 до 5 лет: К=1,1 - 1,2</li>
                <li>от 5 до 10 лет: К=1,2 - 1,3</li>
                <li>свыше 10 лет: К=1,3 - 1,5</li>
              </ul>
              <input
                type="number"
                name="qualificationCoefficient"
                value={formData.qualificationCoefficient}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Время на оформление документации, берется по факту и составляет (от 3-х до 5-ти дней по 8 часов)</label>
              <input
                type="number"
                name="documentationTime"
                value={formData.documentationTime}
                onChange={handleChange}
                min="0"
              />
            </div>

            {systemCalculations() ? (
              <div>
                <h3>Время на описание задачи: {systemCalculations().taskDescriptionTime}</h3>
                <h3>Время на разработку алгоритма: {systemCalculations().algorithmDevelopmentTime}</h3>
                <h3>Время на разработку блок-схемы: {systemCalculations().flowchartDevelopmentTime}</h3>
                <h3>Время написания программы на языке программирования: {systemCalculations().programmingTime}</h3>
                <h3>Время набивки программы: {systemCalculations().programTypingTime}</h3>
                <h3>Время отладки и тестирования программы: {systemCalculations().debuggingTestingTime}</h3>
                <h3>Время на оформление документации: {systemCalculations().documentationTime}</h3>
                <h3>Общее время на создание программного продукта: {systemCalculations().total}</h3>
             </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}
            
          </div>

          {/* Расчет заработной платы исполнителя работ по созданию программного продукта */}
          <div className="form-section">
            <h4>Расчет заработной платы исполнителя работ по созданию программного продукта</h4>
            <div className="form-group">
              <label>Укажите месячную заработную плату:</label>
              <input
                type="number"
                name="monthlySalary"
                value={formData.monthlySalary}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите общее время на создание программного продукта (чел/час):</label>
              <input
                type="number"
                name="totalDevelopmentTime"
                value={formData.totalDevelopmentTime}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите число рабочих дней в месяц (от 1 до 31):</label>
              <input
                type="number"
                name="workingDaysInMonth"
                value={formData.workingDaysInMonth}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите продолжительность рабочего дня в часах (от 1 до 12):</label>
              <input
                type="number"
                name="workingHoursInDay"
                value={formData.workingHoursInDay}
                onChange={handleChange}
                min="0"
              />
            </div>

            {workerSalaryCalculations() ? (
              <div>
                <h3>Заработная плата исполнителя работ составляет: {workerSalaryCalculations()}</h3>
             </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}

          </div>

          {/* Расчет величин обязательных страховых взносов */}
          <div className="form-section">
            <h4>Расчет величин обязательных страховых взносов</h4>
            <div className="form-group">
              <label>Зарплата сотрудника (руб.):</label>
              <input
                type="number"
                name="employeeSalary"
                value={formData.employeeSalary}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Тип бизнеса:</label>
              <Select
                options={businessType}
                value={businessType.find(type => type.value === formData.businessType)}
                onChange={(option) => handleSelectChange(option, { name: 'businessType' })}
                className="react-select"
              />
            </div>
            <div className="form-group">
              <label>Класс профессионального риска:</label>
              <Select
                options={professionalRiskClass}
                value={professionalRiskClass.find(type => type.value === formData.professionalRiskClass)}
                onChange={(option) => handleSelectChange(option, { name: 'professionalRiskClass' })}
                className="react-select"
              />
            </div>

            {insuranceContributionsCalculations() ? (
              <div>
                <h3>Пенсионный фонд (ПФР): {insuranceContributionsCalculations().pensionFund}</h3>
                <h3>Фонд медицинского страхования (ФОМС): {insuranceContributionsCalculations().medicalInsuranceFund}</h3>
                <h3>Фонд социального страхования (ФСС): {insuranceContributionsCalculations().socialInsuranceFund}</h3>
                <h3>Взносы на травматизм: {insuranceContributionsCalculations().injuryContributions}</h3>
                <h3>Общие взносы:  {insuranceContributionsCalculations().totalContributions}</h3>
             </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}

          </div>

          {/* Расчет расходов на содержание и эксплуатацию ПЭВМ */}
          <div className="form-section">
            <h4>Расчет расходов на содержание и эксплуатацию ПЭВМ</h4>
            <div className="form-group">
              <label>Укажите балансовую стоимость одной ПЭВМ с периферией</label>
              <input
                type="number"
                name="singlePCPeripheralCost"
                value={formData.singlePCPeripheralCost}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите срок полезного исполнения:</label>
              <input
                type="number"
                name="usefulLifeSpan"
                value={formData.usefulLifeSpan}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите эффективный годовой фонд времени работы ПЭВМ в часах:</label>
              <input
                type="number"
                name="annualEffectiveOperatingTime"
                value={formData.annualEffectiveOperatingTime}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите стоимость 1 кВт / часа в руб.</label>
              <input
                type="number"
                name="costPerKw"
                value={formData.costPerKw}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите суммарную мощность ПЭВМ с периферией в кВт / часах:</label>
              <input
                type="number"
                name="totalPCPeripheralPower"
                value={formData.totalPCPeripheralPower}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите суммарную мощность, которая идет на освещение в кВт /часах:</label>
              <input
                type="number"
                name="totalLightingPower"
                value={formData.totalLightingPower}
                onChange={handleChange}
                min="0"
              />
            </div>

            {calculationOfExpensesForComputerMaintenance() ? (
              <div>
                <h3>Годовая амортизация (%): {calculationOfExpensesForComputerMaintenance().annualAmortization}</h3>
                <h3>Амортизационные отчисления: {calculationOfExpensesForComputerMaintenance().amortizationExpenses}</h3>
                <h3>Затраты на электроэнергию: {calculationOfExpensesForComputerMaintenance().electricityExpenses}</h3>
                <h3>Годовые расходы на содержание и эксплуатацию 1-ой ПЭВМ: {calculationOfExpensesForComputerMaintenance().totalAnnualExpenses}</h3>
                <h3>Себестоимость 1-го машино-часа работы ПЭВМ: {calculationOfExpensesForComputerMaintenance().costPerMachineHour}</h3>
             </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}

          </div>

          {/* Расчет себестоимости программного продукта */}
          <div className="form-section">
            <h4>Расчет себестоимости программного продукта</h4>
            <div className="form-group">
              {workerSalaryCalculations() && insuranceContributionsCalculations() && calculationOfExpensesForComputerMaintenance() ? (
                <h3>Себестоимость программного продукта составляет: {
                  softwareCostCalculations()
                  }
                </h3>
              ) : (
                <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
              )}
            </div>
          </div>

          {/* Расчет окупаемости */}
          <div className="form-section">
            <h4>Расчет окупаемости</h4>
            <div className="form-group">
              <label>Укажите экономию на автоматизации процессов в руб.:</label>
              <input
                type="number"
                name="savingsOnAutomation"
                value={formData.savingsOnAutomation}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите годовую экономию в руб.</label>
              <input
                type="number"
                name="annualSavings"
                value={formData.annualSavings}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите дополнительные расходы:</label>
              <input
                type="number"
                name="additionalExpenses"
                value={formData.additionalExpenses}
                onChange={handleChange}
                min="0"
              />
            </div>
            {calculationOfPaybackPeriod() ? (
              <h3>Окупаемость программного продукта в годах: {calculationOfPaybackPeriod()}</h3>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}
          </div>

          {/* Расчет выгод для системы информационной безопастности (СИБ) */}
          <div className="form-section">
            <h4>Расчет выгод для системы информационной безопастности (СИБ)</h4>
            <div className="form-group">
              <label>Укажите вероятность угрозы (%):</label>
              <input
                type="number"
                name="threatProbability"
                value={formData.threatProbability}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите возможные убытки:</label>
              <input
                type="number"
                name="possibleLosses"
                value={formData.possibleLosses}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите оставшийся риск после внедрения СИБ:</label>
              <input
                type="number"
                name="remainingRisk"
                value={formData.remainingRisk}
                onChange={handleChange}
                min="0"
              />
            </div>

            {receivedData ? (
              <div>
                <h3>Выгода от предотвращения угроз: {calculationFeasibilityTotal().threatPreventionBenefit}</h3>
                <h3>Экономическая эффективность внедрения системы: {calculationFeasibilityTotal().economicEfficiencyImplementation}</h3>
                <h3>Срок окупаемости: {calculationFeasibilityTotal().paybackPeriod}</h3>
                {/* <h3>Расходы на информационную безопасность составляют: {calculationFeasibilityTotal().informationSecurityExpenses}</h3> */}
              </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}
          </div>

          {/* ИТОГО */}
          <div className="form-section">
            <h3>ИТОГО</h3>
            {receivedData ? (
              <div>
                <h3>Расходы на инормационную безопасность составляют: {calculationFeasibilityTotal().informationSecurityExpenses}</h3>
                <h3>Расчет себестоимости программного продукта: {softwareCostCalculations() ?  softwareCostCalculations() : 'нет данных'}</h3>
                <h3>Расчет выгод для системы информационной бзопасности: {calculationFeasibilityTotal().threatPreventionBenefit}</h3>
              </div>
            ) : (
              <h3>Для подсчета необходимо корректно заполнить все поля.</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeasibilityForm;