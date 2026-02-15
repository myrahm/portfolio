import React from "react";
import Wave from "react-wavify";
import WindowBox from "./components/WindowBox";

const App = () => {
  return (
    <div className="page">
  
      <div className="main">
        
        <div className="intro">
          <h1>hi! i’m <span className="name">myrah</span></h1>
          <p>computer science @ TMU</p>
        </div>

        {/* INSIDE THE WINDOW */}
        <WindowBox>
          
         <div className="about"> <img src="src/assets/miffy.jpg" alt="miffy" className="miffy" /> 
          <div className="about-text"> <h3>i like making cool things</h3> 
            <ul> 
              <li>2 years of software dev experience with <span className="highlight">ONgov</span> and <span className="highlight">CANgov</span></li> 
              <li>currently participating in ibz chair competition</li> <li>avid writer and reader</li>
              <li>miffy enthusiast</li> 
            </ul> 
          </div> 
         </div>

      <div className="projects-header"> <img src="src/assets/star.jpg" alt="star" className="star" /> <h3>projects</h3> </div>
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

      <footer className="dock">
        <div className="dock-item">🏠</div>
        <div className="dock-item">💼</div>
        <div className="dock-item">📚</div>
        <div className="dock-item">🎨</div>
        <div className="dock-item">✉️</div>
      </footer>


    </div>
  );
};

export default App;
