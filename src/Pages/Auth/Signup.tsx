import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../api/supabaseClient";
import "./Auth.css";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"tenant" | "landlord">("tenant");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      // Supabase v2: professional email confirmation flow
      const { data, error } = await supabase.auth.signUp(
        { email, password },
        {
          options: {
            emailRedirectTo: window.location.origin + "/login", 
          },
        }
      );

      if (error) throw error;

      // Insert user role into profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: data.user?.id, email, role }]);

      if (profileError) throw profileError;

      alert(
        "Account created! Please check your email and confirm it before logging in."
      );

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="/profile.png" alt="Profile" className="profile-pic" />
        <h2>
          Welcome to <span className="highlight">Rent Radar</span>
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "tenant" | "landlord")
            }
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
