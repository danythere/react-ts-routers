import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";

import { ITodo } from "../interfaces";

export const ToDoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("todos") || "[]";
    setTodos(JSON.parse(saved) as ITodo[]);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const remove = window.confirm("Вы точно хотите удалить запись?");
    if (remove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
    <React.Fragment>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
