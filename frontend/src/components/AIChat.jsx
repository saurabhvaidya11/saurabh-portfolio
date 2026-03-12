import React from "react";
import "./AIChat.css";

function AIChat({ chat, message, setMessage, sendMessage }) {

  return (

    <section className="ai-section">

      <h2 className="ai-title">AI Assistant</h2>

      <div className="chat-container">

        <div className="chat-messages">

          {chat.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "message user" : "message ai"}
            >
              {msg.text}
            </div>
          ))}

        </div>

        <div className="chat-input">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about Saurabh..."
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </section>

  );

}

export default AIChat;
