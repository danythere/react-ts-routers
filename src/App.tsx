import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { ITodo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
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
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm onAdd={addHandler} />
        <ToDoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
}

export default App;
