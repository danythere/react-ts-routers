import React from "react";
import { ITodo } from "../interfaces";
import { Checkbox } from "@material-ui/core";
type ToDoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};
export const ToDoList = ({ todos, onRemove, onToggle }: ToDoListProps) => {
  if (!todos.length) {
    return <p className="center">Дел нет.</p>;
  }
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };
  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              {todo.completed ? (
                <Checkbox
                  defaultChecked
                  value={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
              ) : (
                <Checkbox
                  value={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
              )}

              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
