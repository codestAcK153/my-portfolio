import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Full Stack Developer, Ameritech IT Solutions</h3>
          <span>May 2021 – June 2022</span>
          <ul>
            <li>Revamped interactive user interfaces and single-page applications using React.JS; implemented responsive designs and custom validations.</li>
            <li>Engineered RESTful microservices with Spring Boot and Hibernate; unified Oracle DB for data persistence.</li>
            <li>Deployed microservices architecture; containerized applications using Docker and deployed on AWS EC2, S3, and Lambda.</li>
            <li>Streamlined collaboration with analysts to ensure 95% UI module acceptance; used Git, Jenkins, and JIRA, reducing deployment time by 30%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Mentor, Artificial Intelligence Mentorship</h3>
          <span>Feb 2023 – Apr 2023</span>
          <ul>
            <li>Directed and built LSTM-based Stock Price Prediction model fetching data from yfinance API, improving accuracy by 18%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Team Lead, Team of Serenity and Silence (T.O.S.S)</h3>
          <span>Aug 2021 – Apr 2022</span>
          <ul>
            <li>Coordinated 4 workshops and 3 hackathons with total participation of 300+ students.</li>
            <li>Initiated updates feature for “TechnoSummit 2021” website using MongoDB, Express, React, Node.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
