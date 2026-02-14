import React from "react";
import Wave from "react-wavify";

const App = () => {
  return (
    <div className="page">

      {/* Left Navigation */}
      <nav className="sidebar">
        <ul>
          <li>me</li>
          <li>experience</li>
          <li>bookshelf</li>
          <li>art</li>
          <li>contact</li>
        </ul>
      </nav>

      {/* Main Intro */}
      <div className="intro">
        <h1>
          hi! <span>i’m myrah</span>
        </h1>
        <p>computer science @ TMU</p>
      </div>

      <div>
        <h3>i like making things</h3>

      </div>

      {/* Footer Wave */}
      <Wave
        fill="#49b7f2"
        paused={false}
        className="wave"
        options={{
          height: 80,
          amplitude: 40,
          speed: 0.2,
          points: 3
        }}
      />

    </div>
  );
};

export default App;
