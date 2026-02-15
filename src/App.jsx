import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import WindowBox from "./components/WindowBox";

const App = () => {
  const [showAbout, setShowAbout] = useState(true);

  // Required for react-draggable in React 18+
  const aboutRef = useRef(null);

  return (
    <div className="page">
      <div className="main">

        {/* INTRO */}
        <div className="intro">
          <h1>
            hi! i’m <span className="name">myrah</span>
          </h1>
          <p>computer science @ TMU</p>
        </div>

        {/* ABOUT WINDOW */}
        {showAbout && (
          <Draggable handle=".window-header" nodeRef={aboutRef}>
            <div ref={aboutRef} style={{ position: "absolute" }}>
              <WindowBox onClose={() => setShowAbout(false)}>
                
                {/* ABOUT CONTENT */}
                <div className="about">
                  <img src="src/assets/miffy.jpg" alt="miffy" className="miffy" />

                  <div className="about-text">
                    <h3>i like making cool things</h3>
                    <ul>
                      <li>
                        2 years of software dev experience with{" "}
                        <span className="highlight">ONgov</span> and{" "}
                        <span className="highlight">CANgov</span>
                      </li>
                      <li>currently participating in ibz chair competition</li>
                      <li>avid writer and reader</li>
                      <li>miffy enthusiast</li>
                    </ul>
                  </div>
                </div>

                {/* PROJECTS SECTION */}
                <div className="projects-header">
                  <img src="src/assets/star.jpg" alt="star" className="star" />
                  <h3>projects</h3>
                </div>

                <div className="projects">
                  <div className="project-box"></div>
                  <div className="project-box"></div>
                  <div className="project-box"></div>
                  <div className="project-box"></div>
                  <div className="project-box"></div>
                  <div className="project-box"></div>
                </div>

              </WindowBox>
            </div>
          </Draggable>
        )}
      </div>

      {/* DOCK */}
      <footer className="dock">
        <div className="dock-item" onClick={() => setShowAbout(true)}>
          <img src="src/assets/nav1.jpg" alt="website icon" />
          <span>about</span>
        </div>

        <div className="dock-item">
          <img src="src/assets/nav2.jpg" alt="website icon" />
          <span>experience</span>
        </div>

        <div className="dock-item">
          <img src="src/assets/nav3.jpg" alt="website icon" />
          <span>projects</span>
        </div>

        <div className="dock-item">
          <img src="src/assets/nav4.jpg" alt="website icon" />
          <span>contact</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
