import React, { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {

  const skills = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "React", level: 80 },
    { name: "REST API", level: 85 },
    { name: "AI Integration", level: 75 },
    { name: "SQL", level: 80 }
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <section id="skills" className="skills-section">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div key={index} className="skill">

            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width: animate ? `${skill.level}%` : "0%"
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
