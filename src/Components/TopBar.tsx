import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide top bar on login & signup pages
  const hideTopBar = ["/login", "/signup"].includes(location.pathname);
  if (hideTopBar) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#0ea5e9",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left side - logo */}
      <div
        style={{ fontWeight: "bold", fontSize: "1.2rem", cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        Rent Radar
      </div>

      {/* Right side - messages icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
        }}
      >
        <FiMessageSquare
          size={22}
          onClick={() => navigate("/messages")}
          style={{
            color: "white",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#dbeafe")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        />
      </div>
    </div>
  );
};

export default TopBar;
