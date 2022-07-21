import React from "react";
import me2 from "../../assets/me2.png";
import "./about.css";

function About() {
  return (
    <div id="about" className="container about__container">
      <h5 className="text-light">Get to know me</h5>
      <h2>About Me</h2>
      <div className="small-container">
        <img className="me2" src={me2} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id
          voluptate nesciunt voluptatum optio, at commodi! Id consequuntur,
          suscipit praesentium odio nihil rem voluptatem inventore pariatur quam
          amet quas voluptas.
        </p>
      </div>
    </div>
  );
}

export default About;
