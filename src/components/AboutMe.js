import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./AboutMe.css";

const AboutMe = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "<span class='typed-text'>Akhilesh Kasarapu</span>",
        "<span class='typed-text'>a Full Stack Developer</span>",
        "<span class='typed-text'>a Python Programmer</span>",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="about-me" id="home">
      <div className="container">
        <div className="intro">
          <div className="intro-text">
            <h1>
              Hi There!{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <h2>
              I'm <span ref={typedElement}></span>
            </h2>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/akhileshkasarapu/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/codestAcK153">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/akhi_codes">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/akhilesh_153/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="intro-image">
            <img
              src="/images/IMG_6094.jpg" // Ensure this path is correct
              alt="Akhilesh Krishna"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
