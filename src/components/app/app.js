import React from "react";

import AppHeader from "../app-header";
import SeacrhPanel from "../search-panel";
import TodoList from "../todo-list";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 0 },
    { label: "Build Awesome App", important: true, id: 1 },
    { label: "Learn React", important: false, id: 2 },
  ];

  return (
    <div className="container">
      <AppHeader toDo={1} done={3} />
      <SeacrhPanel />
      <TodoList
        todos={todoData}
        onDeleted={(id) => console.log(`delete item: ${id}`)}
      />
    </div>
  );
};

export default App;
