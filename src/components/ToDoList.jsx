import React from "react";
import WhatToDoItem from "./WhatToDoItem";

const ToDoList = ({ deals, remove, onToDoItemClick, onChangeDealStatus }) => {
  //Деструктурируем объект props

  return (
    <div className="toDoBlock_list">
      <h3 style={{ textAlign: "center", marginTop: "10px" }}> Список задач</h3>
      {/* Так как deals - это массив, воспользуюсь методом map*/}
      {deals.map((deal, index) => (
        <WhatToDoItem
          remove={remove}
          number={index + 1}
          deal={deal}
          key={deal.id}
          onToDoItemClick={onToDoItemClick}
          onChangeDealStatus={onChangeDealStatus}
        />
      ))}
    </div>
  );
};

export default ToDoList;
