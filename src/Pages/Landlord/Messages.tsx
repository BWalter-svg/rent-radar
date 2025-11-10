import React, { useState } from "react";
import "./landlord.css";

const LandlordMessages: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "Tenant", text: "Hi, I have a problem with the faucet.", time: "11/06/2025 3:20 PM" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { from: "Landlord", text: message, time: new Date().toLocaleString() }]);
    setMessage("");
  };

  return (
    <div className="page-container">
      <h1>Messages</h1>
      <div className="message-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>Send</button>
      </div>
      <div className="message-list">
        {messages.map((m, i) => (
          <div className="message-card" key={i}>
            <p><strong>From:</strong> {m.from}</p>
            <p>{m.text}</p>
            <p className="message-time">{m.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandlordMessages;


