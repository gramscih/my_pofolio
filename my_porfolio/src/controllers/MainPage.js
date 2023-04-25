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
      <div className="main-body">
        <div className="main-summary">
          <div className="main-press">
            <h3 className="sub-title">
              Hello there, <span className="main-green">I'm</span>
            </h3>
            <h1 className="main-green my-name">Gramsci Hermozo</h1>
            <h3 className="sub-title">Full Stack &#60;&#47;&#62; Developer</h3>
            <p className="summary txt-20">
              Innovative task-driven professional with 9+ years of experience in
              software design and development across diverse industries.
              Equipped with a record of success in consistently identifying and
              providing the technological needs of companies through ingenious
              innovation.
              <br />
              Proficient in developing databases, creating user interfaces,
              backend applications, writing and testing codes, troubleshooting
              simple/complex issues, and implementing new features based on user
              feedback.
            </p>
            <button onClick={togglePopup}>Let's Talk</button>
          </div>
          <div className="main-img">
            <img src={me} width="450" height="600" alt="new" />
          </div>
        </div>
        <div className="main-ref">
          <span className="summary-txt">Check Out My</span>
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
