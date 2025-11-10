import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiMessageSquare, FiSettings, FiBell } from "react-icons/fi";

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide nav on login & signup pages
  const hideBottomNav = ["/login", "/signup", "/"].includes(location.pathname);
  if (hideBottomNav) return null;

  // Get user type (saved during login)
  const userType = localStorage.getItem("userType");

  // Define icons + routes dynamically
  const icons = [
    {
      path:
        userType === "landlord"
          ? "/landlord/dashboard"
          : "/tenant/dashboard",
      icon: <FiHome size={22} />,
      label: "Home",
    },
    {
      path:
        userType === "landlord"
          ? "/landlord/messages"
          : "/tenant/messages",
      icon: <FiMessageSquare size={22} />,
      label: "Messages",
    },
    {
      path: "/notifications",
      icon: <FiBell size={22} />,
      label: "Alerts",
    },
    {
      path: "/settings",
      icon: <FiSettings size={22} />,
      label: "Settings",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #e5e7eb",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      {icons.map((item) => {
        const active = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: active ? "#0ea5e9" : "#6b7280",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.75rem",
              gap: "2px",
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
