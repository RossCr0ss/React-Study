import React from "react";

import ItemStatusFilter from './item-status-filter';
import "./search-panel.css";

const SeacrhPanel = () => {
  const SeacrhText = "type something...";
  const SearchStyle = {
    color: "gray",
    fontSize: "20px",
  };

  return (
    <div className="search-panel">
      <input
        className="search-panel-input"
        style={SearchStyle}
        placeholder={SeacrhText}
      />
      <ItemStatusFilter/>
    </div>
  );
};

export default SeacrhPanel;
