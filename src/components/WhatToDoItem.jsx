import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const WhatToDoItem = ({
  //Диструктуризация объекта props
  deal,
  remove,
  onToDoItemClick,
  onChangeDealStatus,
}) => {
  const { isComplete, id, name } = deal; // Диструктуризация deal

  const setValueOfIsComplete = () => {
    onChangeDealStatus(id, !isComplete);
  };

  return (
    <div className="ToDoItem">
      <div className="whatToDoItem" onClick={() => onToDoItemClick(deal)}>
        <div className="whatToDoItem_text">
          {/*Если задача выполнена, то текст перечеркнутый*/}
          {!isComplete ? <strong> {name}</strong> : <s> {name}</s>}
        </div>
        {/*Если задача выполнена, то выводится галочка*/}
        {isComplete ? (
          <MdDone onClick={setValueOfIsComplete} />
        ) : (
          <FcCancel onClick={setValueOfIsComplete} />
        )}
      </div>
      <FiDelete onClick={() => remove(deal)} />
    </div>
  );
};
export default WhatToDoItem;
