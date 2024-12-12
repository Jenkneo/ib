import React, { useState, useEffect, useCallback } from 'react';
import Select from 'react-select';

function FeasibilityForm({ onCalculate }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    feasibilityRatio: 0,
    levelTypes: 'physical',
    groupDifficulty: 'physical',
    noveltyDegree: 'physical',
    timeForTaskDescription: 0,
    changeConsiderationCoefficient: 0,
    documentationPreparationTime: 0,
    qualificationCoefficient: 0,

    algorithmDevelopmentTime: 0,
    flowchartDevelopmentTime: 0,
    programmingTime: 0,
    programInputTime: 0,
    debuggingAndTestingTime: 0,
    documentationTime: 0,

    monthlySalary: 0,
    totalDevelopmentTime: 0,
    workingDaysInMonth: 0,
    workingHoursInDay: 0,

    employeeSalary: 0,
    businessType: '',
    professionalRiskClass: '',

    singlePCPeripheralCost: 0,
    usefulLifeSpan: 0,
    annualEffectiveOperatingTime: 0,
    costPerKw: 0,
    totalPCPeripheralPower: 0,
    totalLightingPower: 0,

    savingsOnAutomation: 0,
    annualSavings: 0,
    additionalExpenses: 0,

  });

  const levelTypes = [
    { value: 'highLevel', label: 'Высокий уровень' },
    { value: 'lowLevel', label: 'Низкий уровень' },
  ];

  const groupDifficulty = [
    { value: 'algorithmOptimization', label: '1 – алгоритмы оптимизации и моделирования систем' },
    { value: 'accounting', label: '2 – задачи учета, отчетности и статистики' },
    { value: 'standardAlgorithms', label: '3 – стандартные алгоритмы' },
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

  const professionalRiskClass = Array.from({ length: 31 }, (_, i) => ({ label: `${i + 1} класс`, value: `${i + 1}` }));

  const calculateTotal = useCallback(() => {
    if (!isEnabled) return;

    let total = 0

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

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption.value
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
          <h3>Технико-экономическое обоснование для разрабатываемой системы</h3>
        </label>
      </div>

      {isEnabled && (
        <div className="form-content">
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
                onChange={(option) => handleSelectChange(option, { name: 'serverType' })}
                className="react-select"
              />
            </div>

            <div className="form-group">
              <label>Определить группу сложности:</label>
              <Select
                options={groupDifficulty}
                value={groupDifficulty.find(type => type.value === formData.groupDifficulty)}
                onChange={(option) => handleSelectChange(option, { name: 'serverType' })}
                className="react-select"
              />
            </div>

            <div className="form-group">
              <label>Определить степень новизны:</label>
              <Select
                options={noveltyDegree}
                value={noveltyDegree.find(type => type.value === formData.noveltyDegree)}
                onChange={(option) => handleSelectChange(option, { name: 'serverType' })}
                className="react-select"
              />
            </div>
            
            <div className="form-group">
              <label>Укажите время на подготовку описания задачи</label>
              <input
                type="number"
                name="timeForTaskDescription"
                value={formData.timeForTaskDescription}
                onChange={handleChange}
                min="0"
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
              <label>Укажите время на оформление документации в часах</label>
              <input
                type="number"
                name="documentationPreparationTime"
                value={formData.documentationPreparationTime}
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
              <label>Время на разработку алгоритма</label>
              <input
                type="number"
                name="algorithmDevelopmentTime"
                value={formData.algorithmDevelopmentTime}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Время на разработку блок-схемы</label>
              <input
                type="number"
                name="flowchartDevelopmentTime"
                value={formData.flowchartDevelopmentTime}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Время написания программы на языке программирования</label>
              <input
                type="number"
                name="programmingTime"
                value={formData.programmingTime}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Время набивки программы</label>
              <input
                type="number"
                name="programInputTime"
                value={formData.programInputTime}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Время отладки и тестирования программы</label>
              <input
                type="number"
                name="debuggingAndTestingTime"
                value={formData.debuggingAndTestingTime}
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

          </div>

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
              <label>Укажите число рабочих дней в месяц:</label>
              <input
                type="number"
                name="workingDaysInMonth"
                value={formData.workingDaysInMonth}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Укажите продолжительность рабочего дня в часах:</label>
              <input
                type="number"
                name="workingHoursInDay"
                value={formData.workingHoursInDay}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

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
          </div>

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
          </div>

          <div className="form-section">
            <h4>Расчет себестоимости программного продукта</h4>
            <div className="form-group">
              <label>Себестоимость программного продукта составляет: ничего, потому что это поле не настроено</label>
            </div>
          </div>

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
          </div>
        </div>
      )}
    </div>
  );
}

export default FeasibilityForm;