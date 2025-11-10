import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // redirect after 5s
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-container">
      <img
        src="/R logo.png"
        alt="Rent Radar Logo"
        className="landing-logo"
      />

      <footer className="landing-footer">
        <span>from</span>
        <strong>WALME</strong>
      </footer>
    </div>
  );
};

export default Landing;
