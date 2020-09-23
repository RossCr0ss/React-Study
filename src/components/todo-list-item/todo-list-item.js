import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props;

    let classNames = "box";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="box-text">{label}</span>

        <button type="button" className="button" onClick={onToggleImportant}>
          &#9873;
        </button>
        <button type="button" className="button" onClick={onToggleDone}>
          &#x2713;
        </button>
        <button type="button" className="button" onClick={onDeleted}>
          &#10006;
        </button>
      </div>
    );
  }
}
