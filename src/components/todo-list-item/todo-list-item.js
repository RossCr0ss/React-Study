import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "box";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="box-text" onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button" className="button">
          &#9998;
        </button>
        <button type="button" className="button" onClick={this.onMarkImportant}>
          &#9873;
        </button>
        <button type="button" className="button">
          &#x2713;
        </button>
      </div>
    );
  }
}
