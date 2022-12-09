import React from "react";
import SingleTodo from "./SingleTodo";

function TodoList({ todos, markComplete }) {
  console.log(todos);
  return (
    <div className="grid-container">
      {todos.map((t) => {
        return <SingleTodo markComplete={markComplete} key={t.id} todo={t} />;
      })}
    </div>
  );
}

export default TodoList;
