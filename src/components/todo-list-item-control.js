import React from "react";

import "./todo-list-item-control.css";

const TodoListItemControl = () => {
    return (
        <div className="todo-list-item-control">
            <button className="button">&#9998;</button>
            <button className="button">&#128465;</button>
            <button className="button">&#x2713;</button>
        </div>
    );
};

export default TodoListItemControl;
