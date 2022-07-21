import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#home">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa-solid fa-user-large"></i>
          </a>
        </li>
        <li>
          <a href="#study">
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a href="#skills">
            <i className="fa-solid fa-chart-simple"></i>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa-solid fa-at"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
