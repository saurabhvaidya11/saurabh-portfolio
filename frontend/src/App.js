import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AIChat from "./components/AIChat";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "./App.css";

function App() {

  // Projects state
  const [projects, setProjects] = useState([]);

  // AI Chat state
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "Hello! I am Saurabh's AI assistant. Ask about projects, skills, or contact."
    }
  ]);

  // Load projects from Django
  useEffect(() => {

    fetch("https://saurabh-portfolio-m1vt.onrender.com/api/projects/")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));

  }, []);

  // Send message to AI
  const sendMessage = async () => {

    if (!message.trim()) return;

    const newChat = [...chat, { sender: "user", text: message }];
    setChat(newChat);

    try {

      const response = await fetch("https://saurabh-portfolio-m1vt.onrender.com/api/ai_assistant/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      const data = await response.json();

      let botReply = data.reply;

      // 🔥 IMPORTANT FIX (SHOW PROJECTS)
      if (data.projects) {
        const projectList = data.projects
          .map(p => `• ${p.title}`)
          .join("\n");

        botReply += "\n\n" + projectList;
      }

      setChat([
        ...newChat,
        { sender: "ai", text: botReply }
      ]);

    }
    catch (error) {

      console.error(error);

    }

    setMessage("");

  };

  return (

    <div>

      <Navbar />

      <Hero />

      <Resume />

      <Projects projects={projects} />

      <Skills />

      <AIChat
        chat={chat}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />

      <Contact />

    </div>

  );

}

export default App;