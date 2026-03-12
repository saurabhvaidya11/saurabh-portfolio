import React from "react";
import "./Projects.css";

function Projects({ projects }) {

  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="tech">{project.tech_stack}</p>

              <p className="desc">{project.description}</p>

              {/* Buttons */}
              <div className="project-buttons">

                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    GitHub
                  </a>
                )}

                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    Live Preview
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;