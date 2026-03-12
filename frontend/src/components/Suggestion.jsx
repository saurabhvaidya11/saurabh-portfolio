import React, { useState } from "react";

function Suggestion() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitSuggestion = async () => {

    await fetch("http://127.0.0.1:8000/api/suggestion/", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        message
      })

    });

    alert("Suggestion submitted");

  };


  return (

    <div>

      <h2>Give Suggestion</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

      <textarea placeholder="Suggestion"
      onChange={(e)=>setMessage(e.target.value)} />

      <button onClick={submitSuggestion}>
        Submit
      </button>

    </div>

  );
}

export default Suggestion;