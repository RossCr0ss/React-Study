import React from "react";

import TodoListItem from "../todo-list-item";
import TodoListItemControl from '../todo-list-item-control';

import './todo-list.css'

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
      const {id, ...itemProps} = item;
    return (
      <li className="todo-list-item" key={id}>
        <TodoListItem {...itemProps} />
        <TodoListItemControl />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;