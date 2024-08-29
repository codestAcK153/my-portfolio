import React from "react";
import "./Skills.css";

const skillsData = [
  {
    name: "Java",
    imageUrl: process.env.PUBLIC_URL + "/images/Java.png",
  },
  {
    name: "C",
    imageUrl: process.env.PUBLIC_URL + "/images/C.png",
  },
  {
    name: "C++",
    imageUrl: process.env.PUBLIC_URL + "/images/C++.png",
  },
  {
    name: "Python",
    imageUrl: process.env.PUBLIC_URL + "/images/PYTHON.png",
  },
  {
    name: "Spring",
    imageUrl: process.env.PUBLIC_URL + "/images/Spring.png",
  },
  {
    name: "MySQL",
    imageUrl: process.env.PUBLIC_URL + "/images/MySQL.png",
  },
  {
    name: "MERN Stack",
    imageUrl: process.env.PUBLIC_URL + "/images/MERN.png",
  },
  {
    name: "Amazon Web Services",
    imageUrl: process.env.PUBLIC_URL + "/images/AWS.png",
  },
  {
    name: "Google Cloud Platform",
    imageUrl: process.env.PUBLIC_URL + "/images/GCP.png",
  },
  {
    name: "Firebase",
    imageUrl: process.env.PUBLIC_URL + "/images/Firebase.png",
  },
  {
    name: "Postgres",
    imageUrl: process.env.PUBLIC_URL + "/images/Postgres.png",
  },
  {
    name: "Git",
    imageUrl: process.env.PUBLIC_URL + "/images/Git.png",
  },
  {
    name: "JavaScript",
    imageUrl: process.env.PUBLIC_URL + "/images/Javascript.png",
  },
  {
    name: "TypeScript",
    imageUrl: process.env.PUBLIC_URL + "/images/Typescript.png",
  }
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-image">
                <img src={skill.imageUrl} alt={skill.name} />
              </div>
              <div className="skill-info">
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
