import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.item.completed === "true" ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" onChange={() => console.log("Changed!")} />
      )}
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
