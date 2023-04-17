import "../styles/mainpage.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import me from "../img/me.jpg";
import MessagePopup from "./MessagePopup";
import { useState } from "react";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const openLink = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <div className="main">
      <header className="main-header">
        <h2>GHC-Logo</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </header>
      <div className="main-body">
        <div className="main-summary">
          <div className="main-press">
            <h3 className="sub-title">
              Hello, <span className="main-green">I'm</span>
            </h3>
            <h1 className="main-green my-name">Gramsci Hermozo</h1>
            <h3 className="sub-title">FullStack developer</h3>
            <p className="summary txt-18">
              I am developer with experience in different language and workind
              in different projects as Backend/UI developer.
            </p>
            <button onClick={togglePopup}>Let's Talk</button>
          </div>
          <div className="main-img">
            <img src={me} width="450" height="600" alt="new" />
          </div>
        </div>
        <div className="main-ref">
          <span className="txt-18">Check Out My</span>
          <div className="icon-content">
            <FaLinkedinIn
              className="cont-icon"
              size={"2em"}
              onClick={() =>
                openLink("https://linkedin.com/in/gramsci-hermozo-campero")
              }
            />
          </div>
          <div className="icon-content">
            <FaGithub
              className="cont-icon"
              size={"2em"}
              onClick={() => openLink("https://github.com/gramscih")}
            />
          </div>
        </div>
      </div>
      {isOpen && <MessagePopup handleClose={togglePopup}></MessagePopup>}
    </div>
  );
};

export default MainPage;
