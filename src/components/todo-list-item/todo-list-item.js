import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };
  render() {
    const { label, important = false } = this.props;

    const itemStyle = {
      color: important ? "tomato" : "black",
    };
    return (
      <span style={itemStyle} className="text" onClick={this.onLabelClick}>
        {label}
      </span>
    );
  }
}
