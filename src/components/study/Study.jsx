import React from "react";
import "./study.css";

function Study() {
  return (
    <div id="study" className="scroll-snap container study__container">
      <h5 className="text-light">What did i do</h5>
      <h2>Qualifications</h2>
        <div className="left">
          <article>
            <h4>
              Senior Technician in Web Development & Multimedia{" "}
              <span className="text-light">· Currently</span>
            </h4>
            <h5 className="text-light">National Audiovisual Institute</h5>
          </article>
          <article>
            <h4>
              Degree in Management <span className="text-light">· 2021</span>
            </h4>
            <h5 className="text-light">University of Algiers 3</h5>
          </article>
        </div>
        <div className="right">
          <article>
            <h4>
              Researcher <span className="text-light">· 2019 (9 month)</span>
            </h4>
            <h5 className="text-light">IMMAR Algérie</h5>
          </article>
          <article>
            <h4>
              Investigator <span className="text-light">· 2016 (1 month)</span>
            </h4>
            <h5 className="text-light">Danone Djurdjura Algérie · CDD</h5>
          </article>
        </div>
    </div>
  );
}

export default Study;
