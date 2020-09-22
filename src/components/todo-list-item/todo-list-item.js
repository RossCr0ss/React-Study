import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
  };
  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };
  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let ClassNames = "text";
    if (done) {
      ClassNames += " done";
    }

    const itemStyle = {
      color: important ? "tomato" : "#4d00b1",
    };
    return (
      <span
        style={itemStyle}
        className={ClassNames}
        onClick={this.onLabelClick}
      >
        {label}
      </span>
    );
  }
}
