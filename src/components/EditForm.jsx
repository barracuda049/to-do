import React, {useEffect, useState} from "react";
import MyButton from "./UI/button/MyButton";

const EditForm = ({selectedToDoItem, onSaveChanges}) => { //деструктуризация пропса
    const [value, setValue] = useState("");
    const {id, name} = selectedToDoItem || {};

    useEffect(() => {
        setValue(name);
    }, [id]);


    return (
      <div className="editStyle">
        {selectedToDoItem && (
          <>
            <textarea
              className="deal-form__textarea"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <div className="deal-form__submit-wrapper">
              <MyButton onClick={() => onSaveChanges({ id, name: value })}>
                Сохранить
              </MyButton>
            </div>
          </>
        )}
      </div>
    );
};

export default EditForm;
