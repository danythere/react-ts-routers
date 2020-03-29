import React, { useState } from "react";

interface ToDoFormProps{
    onAdd(title:String):void
}
export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
      if(event.key==='Enter'){
         props.onAdd(title);
      }
  };
  return (
    <div className="input-field mt2">
      <input
        type="text"
        value={title}
        onChange={changeHandler}
        id="title"
        placeholder="Что делаем?"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Новое дело
      </label>
    </div>
  );
};
