import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = (props) => {
  const [state, setState] = useState(false);
  const [activeIcon, setActiveIcon] = useState("Home");

  const openLink = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <main>
        <h2>GHC-Logo</h2>
        <nav className="nav-elements">
          <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
            <li>
              <a
                className={activeIcon === "Home" ? "active" : ""}
                href="#home"
                onClick={() => setActiveIcon("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={activeIcon === "Projects" ? "active" : ""}
                href="#projects"
                onClick={() => setActiveIcon("Projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={activeIcon === "Resume" ? "active" : ""}
                href="#resume"
                onClick={() => setActiveIcon("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <aside className="main-ref">
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
        </aside>
      </main>
    </>
  );
};

export default Navbar;
