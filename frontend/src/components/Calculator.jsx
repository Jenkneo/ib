import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import ExpensesForm from './forms/ExpensesForm/ExpensesForm';
import OrganizationInfoForm from './forms/OrganizationInfoForm/OrganizationInfoForm';
import FeasibilityForm from './forms/FeasibilityForm/FeasibilityForm';

function Calculator() {
  const [expensesData, setExpensesData] = useState();
  const [organizationData, setOrganizationData] = useState();
  const [feasibilityData, setFeasibilityData] = useState();

  const checkValue = (value) => {
    if (value === null || isNaN(value)) {
      return value === null ? 'нет данных' : 'не определен';
    }

    return value;
  }

  const downloadCalculations = () => {
    const content = `
## Информация об организации
- Название организации: ${organizationData.organizationName}

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
- Время на описание задачи: ${checkValue(feasibilityData.systemCalculations?.taskDescriptionTime)}
- Время на разработку алгоритма: ${checkValue(feasibilityData.systemCalculations?.algorithmDevelopmentTime)}
- Время на разработку блок-схемы: ${checkValue(feasibilityData.systemCalculations?.flowchartDevelopmentTime)}
- Время написания программы на языке программирования: ${checkValue(feasibilityData.systemCalculations?.programmingTime)}
- Время набивки программы: ${checkValue(feasibilityData.systemCalculations?.programTypingTime)}
- Время отладки и тестирования программы: ${checkValue(feasibilityData.systemCalculations?.debuggingTestingTime)}
- Время на оформление документации: ${checkValue(feasibilityData.systemCalculations?.documentationTime)}
- Общее время на создание программного продукта: ${checkValue(feasibilityData.systemCalculations?.total)}

### Расчет заработной платы исполнителя работ по созданию программного продукта
- Заработная плата исполнителя составляет: ${feasibilityData.workerSalaryCalculations ? feasibilityData.workerSalaryCalculations : 'нет данных'}

### Расчет величин обязательных страховых взносов: 
- Пенсионный фонд (ПФР): ${feasibilityData.insuranceContributionsCalculations.pensionFund}
- Фонд медицинского страхования (ФОМС): ${feasibilityData.insuranceContributionsCalculations.medicalInsuranceFund}
- Фонд социального страхования (ФСС): ${feasibilityData.insuranceContributionsCalculations.socialInsuranceFund}
- Взносы на травматизм: ${feasibilityData.insuranceContributionsCalculations.injuryContributions}
- Общие взносы: ${feasibilityData.insuranceContributionsCalculations.totalContributions}

### Расчет расходов на содержание и эксплуатацию ПЭВМ:
- Годовая амортизация (%): ${checkValue(feasibilityData.calculationOfExpensesForComputerMaintenance?.annualAmortization)}
- Амортизационные отчисления: ${checkValue(feasibilityData.calculationOfExpensesForComputerMaintenance?.amortizationExpenses)}
- Затраты на электроэнергию: ${checkValue(feasibilityData.calculationOfExpensesForComputerMaintenance?.electricityExpenses)}
- Годовые расходы на содержание и эксплуатацию 1-ой ПЭВМ: ${checkValue(feasibilityData.calculationOfExpensesForComputerMaintenance?.totalAnnualExpenses)}
- Себестоимость 1-го машино-часа работы ПЭВМ: ${checkValue(feasibilityData.calculationOfExpensesForComputerMaintenance?.costPerMachineHour)}

### Расчет себестоимости программного продукта
- Себестоимость программного продукта составляет: ${feasibilityData.softwareCost ? feasibilityData.softwareCost : 'нет данных'}

### Расчет окупаемости
- Окупаемость программного продукта: ${feasibilityData.calculationOfPaybackPeriod ? feasibilityData.calculationOfPaybackPeriod : 'нет данных'}

### Расчет выгод для системы информационной безопастности (СИБ): 
- Выгода от предотвращения угроз: ${checkValue(feasibilityData.calculationFeasibilityTotal?.threatPreventionBenefit)}
- Срок окупаемости: ${isFinite(feasibilityData.calculationFeasibilityTotal.paybackPeriod) ? feasibilityData.calculationFeasibilityTotal.paybackPeriod : 'никогда'}
- Коэффициент предотвращения убытков: ${checkValue(feasibilityData.calculationFeasibilityTotal.lossPreventionCoefficient)}

### ИТОГО
- Расходы на инормационную безопасность составляют: ${feasibilityData.calculationFeasibilityTotal.informationSecurityExpenses}
- Расчет себестоимости программного продукта: ${feasibilityData.softwareCost ? feasibilityData.softwareCost : 'нет данных'}
- Расчет выгод для системы информационной бзопасности: ${checkValue(feasibilityData.calculationFeasibilityTotal?.threatPreventionBenefit)}

Дата расчета: ${new Date().toLocaleDateString()}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'security-calculations.txt');
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
          <button className="download-btn btn-enabled" onClick={downloadCalculations}>
            Скачать расчеты
          </button>
      </div>
    </div>
  );
}

export default Calculator;
