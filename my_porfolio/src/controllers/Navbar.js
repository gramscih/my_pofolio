import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = (props) => {
  const [state, setState] = useState(false);

  const openLink = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <nav>
        <h2>GHC-Logo</h2>
        <div>
          <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
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
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="main-ref">
          <FaLinkedinIn
            className="ref-icon"
            size={"1.3em"}
            onClick={() =>
              openLink("https://linkedin.com/in/gramsci-hermozo-campero")
            }
          />
          <FaGithub
            className="ref-icon"
            size={"1.3em"}
            onClick={() => openLink("https://github.com/gramscih")}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
