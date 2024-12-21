import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import ExpensesForm from './forms/ExpensesForm/ExpensesForm';
import OrganizationInfoForm from './forms/OrganizationInfoForm/OrganizationInfoForm';
import FeasibilityForm from './forms/FeasibilityForm/FeasibilityForm';

function Calculator() {
  const [expensesData, setExpensesData] = useState();
  const [organizationData, setOrganizationData] = useState();
  const [feasibilityData, setFeasibilityData] = useState();

  const isValidData = (data) => {
    if (typeof data === 'number') {
      return !isNaN(data) && isFinite(data);
    }

    if (typeof data === 'object' && data !== null) {
      for (const key in data) {
        if (!isValidData(data[key])) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  const downloadCalculations = () => {
    const content = `
## Информация об организации
- Название организации: ${organizationData.organizationName}
- Тип отрасли: ${organizationData.industryType}
- Годовой бюджет организации (руб): ${organizationData.annualBudget}
- Бюджет на информационную безопасность (руб): ${organizationData.securityBudget}
- Размер организации: ${organizationData.organizationSize === 'small' ? 'Маленький' : organizationData.organizationSize === 'medium' ? 'Средний' : 'Большой'}

## Информация о расходах
- Расходы на программное обеспечение для информационной безопасности (руб): ${expensesData.softwareTotal}
- Расходы на офисное ЭВО (руб): ${expensesData.hardwareTotal}
- Расходы на обучение специалистов по информационной безопасности (руб): ${expensesData.courseTotal}
- Потенциальные убытки от кибератак (руб): ${expensesData.cyberAttackTotal}
- Расчет стоимости угроз и инцидентов (руб): ${expensesData.incidentCost}
- Расчет стоимости внедрения защитных мер (руб): ${expensesData.safetyMeasuresCost}
- Расчет стоимости восстановления после инцидента (руб): ${expensesData.recoveryCost}

## Технико-экономическое обоснование для разрабатываемой системы
### Основные параметры:
- Время на описание задачи: ${feasibilityData.systemCalculations.taskDescriptionTime}
- Время на разработку алгоритма: ${feasibilityData.systemCalculations.algorithmDevelopmentTime}
- Время на разработку блок-схемы: ${feasibilityData.systemCalculations.flowchartDevelopmentTime}
- Время написания программы на языке программирования: ${feasibilityData.systemCalculations.programmingTime}
- Время набивки программы: ${feasibilityData.systemCalculations.programTypingTime}
- Время отладки и тестирования программы: ${feasibilityData.systemCalculations.debuggingTestingTime}
- Время на оформление документации: ${feasibilityData.systemCalculations.documentationTime}
- Общее время на создание программного продукта: ${feasibilityData.systemCalculations.total}

### Расчет заработной платы исполнителя работ по созданию программного продукта
- Заработная плата исполнителя составляет: ${feasibilityData.workerSalaryCalculations ? feasibilityData.workerSalaryCalculations : 'нет данных'}

### Расчет величин обязательных страховых взносов: 
- Пенсионный фонд (ПФР): ${feasibilityData.insuranceContributionsCalculations.pensionFund}
- Фонд медицинского страхования (ФОМС): ${feasibilityData.insuranceContributionsCalculations.medicalInsuranceFund}
- Фонд социального страхования (ФСС): ${feasibilityData.insuranceContributionsCalculations.socialInsuranceFund}
- Взносы на травматизм: ${feasibilityData.insuranceContributionsCalculations.injuryContributions}
- Общие взносы: ${feasibilityData.insuranceContributionsCalculations.totalContributions}

### Расчет расходов на содержание и эксплуатацию ПЭВМ:
- Годовая амортизация (%): ${feasibilityData.calculationOfExpensesForComputerMaintenance.annualAmortization}
- Амортизационные отчисления: ${feasibilityData.calculationOfExpensesForComputerMaintenance.amortizationExpenses}
- Затраты на электроэнергию: ${feasibilityData.calculationOfExpensesForComputerMaintenance.electricityExpenses}
- Годовые расходы на содержание и эксплуатацию 1-ой ПЭВМ: ${feasibilityData.calculationOfExpensesForComputerMaintenance.totalAnnualExpenses}
- Себестоимость 1-го машино-часа работы ПЭВМ: ${feasibilityData.calculationOfExpensesForComputerMaintenance.costPerMachineHour}

### Расчет себестоимости программного продукта
- Себестоимость программного продукта составляет: ${feasibilityData.softwareCost ? feasibilityData.softwareCost : 'нет данных'}

### Расчет окупаемости
- Окупаемость программного продукта: ${feasibilityData.calculationOfPaybackPeriod ? feasibilityData.calculationOfPaybackPeriod : 'нет данных'}

### Расчет выгод для системы информационной безопастности (СИБ): 
- Выгода от предотвращения угроз: ${feasibilityData.calculationFeasibilityTotal.threatPreventionBenefit}
- Расходы на инормационную безопасность составляют: ${feasibilityData.calculationFeasibilityTotal.informationSecurityExpenses}
- Срок окупаемости: ${feasibilityData.calculationFeasibilityTotal.paybackPeriod}
- Коэффициент предотвращения убытков: ${feasibilityData.calculationFeasibilityTotal.lossPreventionCoefficient}

Дата расчета: ${new Date().toLocaleDateString()}
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'security-calculations.md');
  };

  return (
    <div>
      <h2 className="form-title">Экономика защиты информации</h2>

      <OrganizationInfoForm
        onDataChange={setOrganizationData}
      />
      <ExpensesForm
        onDataChange={setExpensesData}
      />
      <FeasibilityForm
        receivedData={expensesData}
        onDataChange={setFeasibilityData}
      />

      <div className="total-section">
        <div className="total-amount">
          {/* <strong>
            Общая стоимость:{' '}
            {Object.entries(calculations)
              .reduce((sum, [_, value]) => sum + value, 0)
              .toLocaleString()}{' '}
            руб.
          </strong> */}
        </div>
        {isValidData(expensesData) && isValidData(feasibilityData) ? (
          <button className="download-btn" onClick={downloadCalculations}>
            Скачать расчеты
          </button>
        ) : (
          <button className="download-btn disabled" disabled>
            Скачать расчеты
          </button>
        )}
      </div>
    </div>
  );
}

export default Calculator;
