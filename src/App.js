import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Study from "./components/study/Study";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./index.css";

function App() {
  return (
    <div id="home" className="nav">
      <Header />
      <About />
      <Skills />
      <Study />
      <Contact />
      <NavBar />
    </div>
  );
}

export default App;
