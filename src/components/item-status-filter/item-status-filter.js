import React from "react";

import "./item-status-filter.css";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      "btn " + (isActive ? "active" : "");

    return (
      <button
        key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });

  return <div className="status-panel-filter">{buttons}</div>;
};

export default ItemStatusFilter;
