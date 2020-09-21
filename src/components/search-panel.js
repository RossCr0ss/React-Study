import React from "react";

const SeacrhPanel = () => {
  const SeacrhText = "type something...";
  const SearchStyle = {
    color: "gray",
    fontSize: "20px",
  };

  return <input style={SearchStyle} placeholder={SeacrhText} />;
};

export default SeacrhPanel;
