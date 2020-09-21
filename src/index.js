import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SeacrhPanel from './components/search-panel';
import TodoList from './components/todo-list';


const todoData = [
  {label: 'Drink Coffee', important: false},
  {label: 'Build Awesome App', important: true},
  {label: 'Learn React', important: false}
];

const App = () => {
  return (
    <div>
      <AppHeader />
      <SeacrhPanel />
      <TodoList todos= {todoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
