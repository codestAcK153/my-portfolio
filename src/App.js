import "./App.css";
import React, { useState, useEffect } from "react";
import "./components/AboutMe.js";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import SkillsExperience from "./components/SkillsExperience";
import AboutMe from "./components/AboutMe.js";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <AboutMe />
      <Education />
      <SkillsExperience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
