import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="input"
          onChange={this.onLabelChange}
          placeholder="What do you want to do?"
          value={this.state.label}
        />
        <button
          type="submit"
          className="button"
        >
          Add item
        </button>
      </form>
    );
  }
}
