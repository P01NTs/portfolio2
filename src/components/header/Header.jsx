import React from "react";
import CTA from "./CTA";
import me from "../../assets/me.png";
import Social from "./Social";
import "./header.css";

function Header() {
  return (
    <div id="home" className="scroll-snap header__container">
      <h5>Hello, I'm</h5>
      <h2>Boutarfa Mohamed Wassim</h2>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA className="cta" />
      <Social />
      <div>
        <img className="me" src={me} alt="me" />
      </div>
    </div>
  );
}

export default Header;
