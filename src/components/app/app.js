import React, { Component } from "react";

import AppHeader from "../app-header";
import SeacrhPanel from "../search-panel";
import TodoList from "../todo-list";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 0 },
      { label: "Build Awesome App", important: true, id: 1 },
      { label: "Learn React", important: false, id: 2 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newTodoData
      }
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader toDo={1} done={3} />
        <SeacrhPanel />
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
        />
      </div>
    );
  }
}
