import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div>
    <h1>Todo List</h1>
    <input type="search" placeholder="type something" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));