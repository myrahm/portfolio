// WindowBox.jsx
import React from "react";

const WindowBox = ({ children, onClose, onMinimize, onFullscreen, fullscreen }) => {
  return (
    <div className={`window ${fullscreen ? "window-fullscreen" : ""}`}>
      <div className="window-header">
        <span className="dot red" onClick={onClose}></span>
        <span className="dot yellow" onClick={onMinimize}></span>
        <span className="dot green" onClick={onFullscreen}></span>
      </div>

      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default WindowBox;
