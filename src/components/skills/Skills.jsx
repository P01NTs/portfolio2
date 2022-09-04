import React from "react";
import "./skills.css";

function Skills() {
  const frontend = [
    { lang: "HTML", level: "Experienced" },
    { lang: "CSS", level: "Experienced" },
    { lang: "JavaScript", level: "Experienced" },
    { lang: "React", level: "advenced" },
  ];
  const backend = [
    { lang: "PHP", level: "Beginner"},
    { lang: "NodeJs", level: "Beginner"},
  ]

  return (
    <div id="skills" className="scroll-snap container skills__container">
      <h5 className="text-light">What skills i have</h5>
      <h2>Skills</h2>
      <div className="skills__content__container">
        <div className="skills__content">
          <h3>Frontend</h3>
          <div className="content">
            {frontend.map((skill, index) => {
              return (
                <article key={index}>
                  <div>
                    <i className="fa fa-circle-check"></i>
                    <h4>{skill.lang}</h4>
                  </div>
                  <small className="text-light">{skill.level}</small>
                </article>
              );
            })}
          </div>
        </div>
        <div className="skills__content">
          <h3>Frontend</h3>
          <div className="content">
            {backend.map((skill, index) => {
              return (
                <article key={index}>
                  <div>
                    <i className="fa fa-circle-check"></i>
                    <h4>{skill.lang}</h4>
                  </div>
                  <small className="text-light">{skill.level}</small>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
