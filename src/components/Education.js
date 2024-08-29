import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Texas at Dallas",
    duration: "2022 - 2024",
    description:
      "Studied Web Programming Languages, Database Design, Machine Learning, Design and Analysis of Algorithms, Big Data Management and Analytics, Artificial Intelligence",
    activities: [
      {
        role: "MEMBER OF ARTIFICIAL INTELLIGENCE MENTORSHIP (AIM)",
        details: [
          "Worked in developing a Stock Price Prediction Using LSTM by fetching data from yfinance API",
        ],
      },
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Sathyabama University",
    duration: "2018 - 2022",
    description:
      "Focused on software engineering, data structures, algorithms, and web development.",
    activities: [
      {
        role: "TEAM LEAD AT TEAM OF SERENITY & SILENCE (TOSS) ORGANIZATION",
        details: [
          "Organized 4 workshops & 3 hackathons with total participation of 300+ students ",
          "Led a team of 20 students for community service projects"
        ],
      },
    ],
  },
];

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="container">
        <h1 className="education-title">Education</h1>
        <div className="timeline">
          {educationData.map((education, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <span className="timeline-date">{education.duration}</span>
                <h2 className="timeline-degree">{education.degree}</h2>
                <h3 className="timeline-institution">
                  {education.institution}
                </h3>
                <p className="timeline-description">{education.description}</p>
                <div className="activities">
                  <h4>Activities</h4>
                  {education.activities.map((activity, idx) => (
                    <div key={idx} className="activity">
                      <span className="activity-role">{activity.role}</span>
                      <ul>
                        {activity.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
