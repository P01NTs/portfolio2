import React from "react";
import me2 from "../../assets/me2.png";
import "./about.css";

function About() {
  return (
    <div id="about" className="scroll-snap container about__container">
      <h5 className="text-light">Get to know me</h5>
      <h2>About Me</h2>
      <div className="small-container">
        <img className="me2" src={me2} alt="" />
        <div className="side-about">
          <p>
            Hello! My name is Wassim, and I enjoy creating things that live on
            the internet. Web development has always intrigued me, but I started
            to get into it back in 2020 during the COVID19 quarantine and it
            turned out to be a hidden passion. Soon after in 2021 I joined for a
            Higher National Diplomat in Web Development & multimedia.
          </p>
          <p>
            As a mainly self-taught developer, My main focus in these first
            years is learning and improving my skills and knowledge. Here are a
            few languages I've managed to learn until today:
          </p>
            <a href="#contact" className="btn btn-primary" >Lets Talk</a>
        </div>
      </div>
    </div>
  );
}

export default About;
