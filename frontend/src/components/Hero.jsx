import React, { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Fullstack Python Developer",
  "Python & Django Developer",
  "REST API & Integration",
  "ML & AI Integration",
  "Freelancer — Open to Work"
];

function Hero() {

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {

      timeout = setTimeout(() => {
        setText(prev => prev + currentRole.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 60);

    }
    else if (isDeleting && charIndex > 0) {

      timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 30);

    }
    else if (!isDeleting && charIndex === currentRole.length) {

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);

    }
    else if (isDeleting && charIndex === 0) {

      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);

    }

    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, roleIndex]);

  return (

    <section id="home" className="hero">

      {/* Particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-content">

        <h1 className="hero-name">
          Hi, I'm <span>Saurabh Vaidya</span>
        </h1>

        <h2 className="hero-role">
          {text}<span className="cursor">|</span>
        </h2>

        <p className="hero-desc">
          I build AI-powered fullstack applications using Django, React, robust API integrations and modern technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>

      </div>

    </section>

  );
}

export default Hero;
