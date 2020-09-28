import React, { Component } from "react";

import AppHeader from "../app-header";
import SeacrhPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddform from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  maxID = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Build Awesome App"),
      this.createTodoItem("Learn React"),
    ],
    search: "",
    filter: "all",
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(item => item.id !== id)
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
  onSearchChange = (search) => {
    this.setState({ search });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  filterItems(items, filter) {
    if (filter === "all") {
      return items;
    } else if (filter === "active") {
      return items.filter((item) => !item.done);
    } else if (filter === "done") {
      return items.filter((item) => item.done);
    }
  }

  render() {
    const { todoData, search, filter } = this.state;
    const visibleItems = this.searchItems(
      this.filterItems(todoData, filter),
      search
    );
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="container">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="filter-box">
          <SeacrhPanel onTermChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <ItemAddform onItemAdded={this.addItem} />
      </div>
    );
  }
}
