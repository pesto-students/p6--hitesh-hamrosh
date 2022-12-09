import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import todos from "./data/TodoData";
import TodoList from "./TodoList";
function TodoApp() {
  const [apptodos, setAppTodos] = useState(todos);

  const insertTodo = (todoText) => {
    let obj = {
      id: apptodos.length + 1,
      todo_text: todoText,
      status: "Pending",
    };
    let todosNew = [...apptodos];
    todosNew.push(obj);
    setAppTodos(todosNew);
  };

  const markComplete = (id, status) => {
    let index = apptodos.map((e) => e.id).indexOf(id);
    let todosNew = [...apptodos];

    todosNew[index].status = status;
    setAppTodos(todosNew);
  };

  return (
    <>
      <TodoCreate insertTodo={insertTodo} />
      <TodoList markComplete={markComplete} todos={apptodos} />
    </>
  );
}

export default TodoApp;
