import React from "react";

import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
  const itemStyle = {
    color: important ? "tomato" : "black",
  };
  return <span style={itemStyle} className="text"> {label}</span>;
};

export default TodoListItem;
