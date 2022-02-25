import React, { useState } from "react";
import "./styles/index.scss";
import ToDoList from "./components/ToDoList";
import EditForm from "./components/EditForm";
import InputDataForDeal from "./components/InputDataForDeal";
import Input from "./components/UI/input/Input";

/*
 * Используются следующие компоненты.
 * 1. ToDoList - это компонент, формирующий в себе список задач
 * 2. EditForm - это компонент, в котором возможно редактирование задачи
 * 3. InputDataForDeal - это компонент, возращает блок, для создания задачи
 * 4. WhatToDoItem
 */

function App() {
  /* Использование хука состояния*/
  const [deals, setDeals] = useState([]); //Создаем состояние deals, исходное состояние - массив
  const [selectedToDoItem, setSelectedToDoItem] = useState(null);
  const [searchedValue, setSearchedValue] = useState("");

  /*
   * Данная функция опрокидывается в ToDoList, затем в WhatToDoItem
   * в качестве аргумента принимает нажатый item (объект)
   * setSelectedToDoItem - обновляет состояние selectedToDoItem
   */
  const onToDoItemClick = (item) => {
    setSelectedToDoItem(item);
  };
  /*
   * Стрелочная функция, в качетсве аргумента принимает объект newDeal
   * Разворачиваем в массив deals старый deals, добавляем в конце newDeals
   * Данная функция опрокидывается в InputDataForDeal
   * */
  const createDeal = (newDeal) => {
    setDeals([...deals, newDeal]);
  };
  /*
   * Стрелочная функция, в качетсве аргумента принимает отдельный объект
   * Функция используется для удаления заметки (элемента массива deals), используя метод filter,
   * filter возвращает массив с элементами, прошедшими проверку задаваемую в передаваемой функции, фильтруем массив по id компонента
   * removeDeal опрокидывается в компонент ToDoList, затем WhatToDoItem
   */
  const removeDeal = (deal) => {
    setDeals(deals.filter(({ id }) => id !== deal.id));
    if (selectedToDoItem?.id === deal.id) setSelectedToDoItem(null);
  };
  /*
   * Данная функция опрокидывается в компонент EditForm, при нажатие на компонент WhatToDoItem, возможно редакирование названия
   * Функция принимает в качестве аргумента объект
   *
   * */
  const onSaveChanges = (changedItem) => {
    const itemIndex = deals.findIndex(({ id }) => changedItem.id === id); // Находим индекс измененного объекта
    const newDeals = [...deals]; //Копируем массив
    newDeals[itemIndex] = changedItem; // Заменяем элемент массива

    setDeals(newDeals); // Устанавливаем новое состояние для deals
  };

  //Устанавливаем новое состояние для searchedValue (контролируемый input)
  const searchDeal = (e) => {
    setSearchedValue(e.target.value);
  };

  /*
      Реализация поиска
      Если есть значение в строке поиска, то фильтруется массив значений
      И затем опрокидываем эти данные для отображения
   */
  const dealsForView = searchedValue
    ? deals.filter((deal) =>
        deal.name.toLowerCase().includes(searchedValue.toLowerCase())
      ) //ищем значения без учета регистра
    : deals;

  const onChangeDealStatus = (dealId, isComplete) => {
    const itemIndex = deals.findIndex(({ id }) => dealId === id);
    const newDeals = [...deals];
    newDeals[itemIndex].isComplete = isComplete;
    setDeals(newDeals);
  };

  return (
    <div className="App">
      <InputDataForDeal create={createDeal} />
      <Input
        placeholder="Поиск"
        type="text"
        value={searchedValue}
        onChange={searchDeal}
      />
      <div className="DealAndEditForm">
        <EditForm
          onSaveChanges={onSaveChanges}
          selectedToDoItem={selectedToDoItem}
        />
        <ToDoList
          remove={removeDeal}
          deals={dealsForView}
          onToDoItemClick={onToDoItemClick}
          onChangeDealStatus={onChangeDealStatus}
        />
      </div>
    </div>
  );
}

export default App;
