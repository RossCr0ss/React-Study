import React, { Component } from "react";

import AppHeader from "../app-header";
import SeacrhPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddform from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxID = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Build Awesome App"),
      this.createTodoItem("Learn React"),
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxID++,
    };
  }

  toggleProperty(arr, id, property) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [property]: !oldItem[property] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="container">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SeacrhPanel />
        <TodoList
          todos={todoData}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <ItemAddform addItem={() => this.addItem("Hello World")} />
      </div>
    );
  }
}
