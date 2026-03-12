import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      <div className="navbar-logo">
        Saurabh<span>Vaidya</span>
      </div>

      <ul className="navbar-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

    </nav>

  );
}

export default Navbar;
