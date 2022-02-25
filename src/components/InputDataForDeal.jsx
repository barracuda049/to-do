import React, { useState } from "react";
import Input from "./UI/input/Input";
import MyButton from "./UI/button/MyButton";

const InputDataForDeal = ({ create }) => {
  //Диструктуризация props
  const [value, setValue] = useState("");

  const addNewNote = () => {
    if (value) {
      const newDeal = {
        name: value,
        isComplete: false,
        id: Date.now(),
      };
      create(newDeal);
      setValue("");
    }
  };

  return (
    <div className="formStyle">
      <Input
        value={value}
        type="text"
        placeholder="Имя заметки"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <MyButton onClick={addNewNote}>Создать</MyButton>
    </div>
  );
};

export default InputDataForDeal;
