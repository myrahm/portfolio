import React from "react";
import Wave from "react-wavify";
import WindowBox from "./components/WindowBox";

const App = () => {
  return (
    <div className="page">

      <nav className="sidebar">
        <ul>
          <li>me</li>
          <li>experience</li>
          <li>bookshelf</li>
          <li>art</li>
          <li>contact</li>
        </ul>
      </nav>

      <WindowBox>
        <h1>hi! i’m myrah</h1>
        <p>computer science @ TMU</p>

        <h3 style={{ color: "red" }}>i like making cool things</h3>

        <ul>
          <li>2 years of software dev experience with ONgov and CANgov</li>
          <li>currently participating in ibz chair competition</li>
          <li>avid writer and reader</li>
          <li>miffy enthusiast</li>
        </ul>

        <h3>⭐ projects</h3>

        <div className="projects">
          <div className="project-box"></div>
          <div className="project-box"></div>
        </div>
      </WindowBox>

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
