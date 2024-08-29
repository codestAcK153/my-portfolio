import React from "react";
import "./SkillsExperience.css";

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
  },
  // Add more skills as needed
];

const SkillsExperience = () => {
  return (
    <div
      className="skills-experience-container"
      id="skills-experience-container"
    >
      <div className="skills-section" id="skills">
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
      <div className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3>Full Stack Developer, Ameritech IT Solutions</h3>
          <span>May 2021 – June 2022</span>
          <ul>
            <li>
              Revamped interactive user interfaces and single-page applications
              using React.JS; implemented responsive designs and custom
              validations.
            </li>
            <li>
              Engineered RESTful microservices with Spring Boot and Hibernate;
              unified Oracle DB for data persistence.
            </li>
            <li>
              Deployed microservices architecture; containerized applications
              using Docker and deployed on AWS EC2, S3, and Lambda.
            </li>
            <li>
              Streamlined collaboration with analysts to ensure 95% UI module
              acceptance; used Git, Jenkins, and JIRA, reducing deployment time
              by 30%.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Mentor, Artificial Intelligence Mentorship</h3>
          <span>Feb 2023 – Apr 2023</span>
          <ul>
            <li>
              Directed and built LSTM-based Stock Price Prediction model
              fetching data from yfinance API, improving accuracy by 18%.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Team Lead, Team of Serenity and Silence (T.O.S.S)</h3>
          <span>Aug 2021 – Apr 2022</span>
          <ul>
            <li>
              Coordinated 4 workshops and 3 hackathons with total participation
              of 300+ students.
            </li>
            <li>
              Initiated updates feature for “TechnoSummit 2021” website using
              MongoDB, Express, React, Node.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
