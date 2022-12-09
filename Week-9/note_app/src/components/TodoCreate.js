import React, { useState } from "react";

function TodoCreate({ insertTodo }) {
  const [todotext, setTodoText] = useState("");
  function insert() {
    insertTodo(todotext);
    setTodoText("");
  }
  return (
    <div className="appTitle">
      <h1>My Todos</h1>

      <textarea
        placeholder="Enter Todo"
        className="txt"
        value={todotext}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        rows={4}
        maxLength={100}
        style={{ width: 400 }}
        width="700px"
      />
      <p>{100 - todotext.length} Characters Remaining</p>
      <button
        onClick={() => {
          if (todotext !== "") insert();
          else alert("Enter Todo");
        }}
        className="btn"
      >
        Create Todo
      </button>
    </div>
  );
}

export default TodoCreate;
