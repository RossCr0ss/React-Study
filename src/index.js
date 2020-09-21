import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SeacrhPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div>
      <AppHeader />
      <SeacrhPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
