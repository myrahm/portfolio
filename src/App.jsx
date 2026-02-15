import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import WindowBox from "./components/WindowBox";

const App = () => {
  const [windows, setWindows] = useState({
    about:      { open: true,  minimized: false, fullscreen: false, z: 1 },
    experience: { open: false, minimized: false, fullscreen: false, z: 0 },
    projects:   { open: false, minimized: false, fullscreen: false, z: 0 },
    contact:    { open: false, minimized: false, fullscreen: false, z: 0 },
  });

  const [topZ, setTopZ] = useState(1);
  const [bouncing, setBouncing] = useState(null);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const bringToFront = (key) => {
    setTopZ((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key], z: topZ + 1 },
    }));
  };

  const openWindow = (key) => {
    setTopZ((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key], open: true, minimized: false, z: topZ + 1 },
    }));
  };

  const closeWindow = (key) => {
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key], open: false },
    }));
  };

  const toggleMinimize = (key) => {
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key], minimized: !prev[key].minimized },
    }));
  };

  const toggleFullscreen = (key) => {
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key], fullscreen: !prev[key].fullscreen },
    }));
  };

  const handleDockClick = (key) => {
    openWindow(key);
    setBouncing(key);
    setTimeout(() => setBouncing(null), 400);
  };

  return (
    <div className="page">
      {/* MENU BAR */}
      <div className="menu-bar">
        <div className="menu-left">
          <span className="menu-logo"></span>
          <span className="menu-item">myrahOS</span>
          <span className="menu-item">File</span>
          <span className="menu-item">Edit</span>
          <span className="menu-item">View</span>
        </div>
        <div className="menu-right">
          <span className="menu-item">portfolio</span>
        </div>
      </div>

      <div className="main">
        {/* INTRO */}
        <div className="intro">
          <h1>
            hi! i’m <span className="name">myrah</span>
          </h1>
          <p>computer science @ TMU</p>
        </div>

        {/* ABOUT WINDOW */}
        {windows.about.open && !windows.about.minimized && (
          <Draggable
            handle=".window-header"
            nodeRef={aboutRef}
            defaultPosition={{ x: 0, y: 180 }}
            onStart={() => bringToFront("about")}
          >
            <div
              ref={aboutRef}
              style={{ position: "absolute", zIndex: windows.about.z }}
              onMouseDown={() => bringToFront("about")}
            >
              <WindowBox
                onClose={() => closeWindow("about")}
                onMinimize={() => toggleMinimize("about")}
                onFullscreen={() => toggleFullscreen("about")}
                fullscreen={windows.about.fullscreen}
              >
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

        {/* EXPERIENCE WINDOW (placeholder content) */}
        {windows.experience.open && !windows.experience.minimized && (
          <Draggable
            handle=".window-header"
            nodeRef={experienceRef}
            defaultPosition={{ x: -260, y: 220 }}
            onStart={() => bringToFront("experience")}
          >
            <div
              ref={experienceRef}
              style={{ position: "absolute", zIndex: windows.experience.z }}
              onMouseDown={() => bringToFront("experience")}
            >
              <WindowBox
                onClose={() => closeWindow("experience")}
                onMinimize={() => toggleMinimize("experience")}
                onFullscreen={() => toggleFullscreen("experience")}
                fullscreen={windows.experience.fullscreen}
              >
                <h3>experience</h3>
                <p>you can fill this with your roles, timelines, etc.</p>
              </WindowBox>
            </div>
          </Draggable>
        )}

        {/* PROJECTS WINDOW (placeholder) */}
        {windows.projects.open && !windows.projects.minimized && (
          <Draggable
            handle=".window-header"
            nodeRef={projectsRef}
            defaultPosition={{ x: 260, y: 220 }}
            onStart={() => bringToFront("projects")}
          >
            <div
              ref={projectsRef}
              style={{ position: "absolute", zIndex: windows.projects.z }}
              onMouseDown={() => bringToFront("projects")}
            >
              <WindowBox
                onClose={() => closeWindow("projects")}
                onMinimize={() => toggleMinimize("projects")}
                onFullscreen={() => toggleFullscreen("projects")}
                fullscreen={windows.projects.fullscreen}
              >
                <h3>projects</h3>
                <p>you can showcase individual projects here.</p>
              </WindowBox>
            </div>
          </Draggable>
        )}

        {/* CONTACT WINDOW (placeholder) */}
        {windows.contact.open && !windows.contact.minimized && (
          <Draggable
            handle=".window-header"
            nodeRef={contactRef}
            defaultPosition={{ x: 0, y: 260 }}
            onStart={() => bringToFront("contact")}
          >
            <div
              ref={contactRef}
              style={{ position: "absolute", zIndex: windows.contact.z }}
              onMouseDown={() => bringToFront("contact")}
            >
              <WindowBox
                onClose={() => closeWindow("contact")}
                onMinimize={() => toggleMinimize("contact")}
                onFullscreen={() => toggleFullscreen("contact")}
                fullscreen={windows.contact.fullscreen}
              >
                <h3>contact</h3>
                <p>email, links, whatever you want here.</p>
              </WindowBox>
            </div>
          </Draggable>
        )}
      </div>

      {/* DOCK */}
      <footer className="dock">
        <div
          className={`dock-item ${bouncing === "about" ? "bounce" : ""}`}
          onClick={() => handleDockClick("about")}
        >
          <img src="src/assets/nav1.jpg" alt="website icon" />
          <span>about</span>
        </div>

        <div
          className={`dock-item ${bouncing === "experience" ? "bounce" : ""}`}
          onClick={() => handleDockClick("experience")}
        >
          <img src="src/assets/nav2.jpg" alt="website icon" />
          <span>experience</span>
        </div>

        <div
          className={`dock-item ${bouncing === "projects" ? "bounce" : ""}`}
          onClick={() => handleDockClick("projects")}
        >
          <img src="src/assets/nav3.jpg" alt="website icon" />
          <span>projects</span>
        </div>

        <div
          className={`dock-item ${bouncing === "contact" ? "bounce" : ""}`}
          onClick={() => handleDockClick("contact")}
        >
          <img src="src/assets/nav4.jpg" alt="website icon" />
          <span>contact</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
