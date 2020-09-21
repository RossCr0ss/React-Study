import React from "react";

import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="status-panel-filter">
      <button>All</button>
      <button>Active</button>
      <button>Done</button>
    </div>
  );
};

export default ItemStatusFilter;
