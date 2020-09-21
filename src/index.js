import React from "react";
import ReactDOM from "react-dom";

const AppHeader = () => {
  return <h1>Todo List</h1>;
};

const SeacrhPanel = () => {
  return <input type="search" placeholder="type something" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SeacrhPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
