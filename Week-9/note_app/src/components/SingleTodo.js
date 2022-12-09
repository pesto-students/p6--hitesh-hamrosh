import React from "react";

function SingleTodo({ todo, markComplete }) {
  return (
    <div className="todo_div">
      <label class="container">
        <input
          type="checkbox"
          onChange={(e) => {
            console.log("dfgd", todo.id);
            if (e.target.checked) {
              markComplete(todo.id, "Complete");
            } else {
              markComplete(todo.id, "Pending");
            }
          }}
        ></input>
        <span class="checkmark"></span>
      </label>
      <h4>
        {todo.status == "Pending" ? todo.todo_text : <s>{todo.todo_text}</s>}
      </h4>

      {/* <button
        className="close"
      
      >
        X
      </button> */}
    </div>
  );
}

export default SingleTodo;
