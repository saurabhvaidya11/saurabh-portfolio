import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resume.css";

function Resume() {

  const [resume, setResume] = useState(null);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    axios.get("https://saurabh-portfolio-m1vt.onrender.com/api/resume/")
      .then(res => setResume(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="resume-main">

      <h1 className="main-title">My Resume</h1>

      <div className="resume-layout">

        {/* LEFT SIDE - Suggestion Box */}
        <div className="suggestion-box">

          <h2>Send Suggestion</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Suggestion"></textarea>

          <button className="submit-btn">Submit</button>

        </div>


        {/* RIGHT SIDE */}
        <div className="resume-container">

          {!showResume && (
            <>
              <button
                className="view-btn fade-slide"
                onClick={() => setShowResume(true)}
              >
                View Resume
              </button>

              <div className="resume-text fade-slide">
                <h2>Professional Profile</h2>
                <p>
                  I am a Python Full Stack Developer skilled in Django,
                  React, REST APIs, and AI integrations.
                </p>
                <p>
                  Click the button above to preview and download my resume.
                </p>
              </div>
            </>
          )}

          {showResume && resume && (
            <div className="fade-slide">

              <div className="resume-actions">

                <a
                  href={`https://saurabh-portfolio-m1vt.onrender.com${resume.file}`}
                  download
                  className="download-btn"
                >
                  Download Resume
                </a>

                <button
                  className="close-btn"
                  onClick={() => setShowResume(false)}
                >
                  Close Resume
                </button>

              </div>

              <iframe
                src={`https://saurabh-portfolio-m1vt.onrender.com${resume.file}#toolbar=0`}
                title="Resume"
                className="resume-frame"
              />

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Resume;