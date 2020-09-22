import React from "react";

import ItemStatusFilter from '../item-status-filter';
import "./search-panel.css";

const SeacrhPanel = () => {
  const SeacrhText = "Type to search...";
  
  return (
    <div className="search-panel">
      <input
        className="search-panel-input"
        placeholder={SeacrhText}
      />
      <ItemStatusFilter/>
    </div>
  );
};

export default SeacrhPanel;
