// WindowBox.jsx
import React from "react";

const WindowBox = ({ children, onClose }) => {
  return (
    <div className="window">
      <div className="window-header">
        <span className="dot red" onClick={onClose}></span>
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
