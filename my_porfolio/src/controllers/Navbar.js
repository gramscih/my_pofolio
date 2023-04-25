import { useState } from "react";
import "../styles/navbar.css";

const Navbar = (props) => {
  const [state, setState] = useState(false);

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
              <a className="active" href="#home">
                Home
              </a>
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
      </nav>
    </>
  );
};

export default Navbar;
