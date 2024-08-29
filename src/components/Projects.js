import React from "react";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    title: "Blog Application using Springboot",
    description: "Built Blog Application in Springboot and deployed in AWS",
    imageUrl: process.env.PUBLIC_URL + "/images/blog.jpeg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "E commerce Web Application",
    description: "Application built in MERN stack",
    imageUrl: process.env.PUBLIC_URL + "/images/e-commerce.jpeg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Snake & Ladder in Java",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/Snake&Ladder.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Email Spam Classification",
    description: "Built Blog Application in Springboot and deployed in AWS",
    imageUrl: process.env.PUBLIC_URL + "/images/spam.jpg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Chat Application",
    description: "Clone",
    imageUrl: process.env.PUBLIC_URL + "/images/chat.jpeg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Personal Website Portfolio",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/Portfolio.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="projects-title">
          My Recent <span>Works</span>
        </h1>
        <p className="projects-subtitle">
          Here are a few projects I've worked on recently.
        </p>
        <div className="mobile-view">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="desktop-view">
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
