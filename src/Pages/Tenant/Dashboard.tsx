import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const TenantDashboard: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Current Property",
      description: "See your current rented property details.",
      path: "/tenant/current-property",
    },
    {
      title: "Rent History",
      description: "View past payments and due dates.",
      path: "/tenant/rent-history",
    },
    {
      title: "Messages",
      description: "Chat with your landlord easily.",
      path: "/tenant/messages",
    },
    {
      title: "Maintenance Requests",
      description: "Log any issues for your property.",
      path: "/tenant/maintenance",
    },
  ];

  return (
    <div className="page-container">
      <h1>Tenant Dashboard</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(card.path)}
            style={{ cursor: "pointer" }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantDashboard;
