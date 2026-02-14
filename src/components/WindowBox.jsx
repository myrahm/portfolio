// WindowBox.jsx
import React from "react";

const WindowBox = ({ children }) => {
  return (
    <div className="window">
      <div className="window-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>

      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default WindowBox;
