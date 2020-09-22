import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="status-panel-filter">
        <button>All</button>
        <button>Active</button>
        <button>Done</button>
      </div>
    );
  }
}
