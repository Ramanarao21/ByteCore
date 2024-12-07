import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for user role
  const navigate = useNavigate();

  const toggleAccountMode = () => {
    setHasAccount((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate role selection
    if (!role) {
      alert("Please select a role to continue.");
      return;
    }

    // Mock user object
    const user = {
      name: email.split("@")[0], // Extract username from email
      email,
      role,
    };

    // Simulate login and pass user to parent component
    onLogin(user);

    // Redirect to the dashboard
    navigate("/dashboard/home");
  };


  return (
    <div className="main-container">
      <div className="card">
      <img src={assets.loginimg} alt="Login Illustration" className="card-img" />
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{hasAccount ? "Login" : "Sign Up"}</h2>

          {/* Username for Sign Up */}
          {!hasAccount && (
            <input
              type="text"
              placeholder="Username"
              required
            />
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Role Selection Dropdown */}
          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          {/* Submit Button */}
          <button type="submit">{hasAccount ? "Login Now!" : "Create Account"}</button>

          {/* Terms and Conditions */}
          <div className="login-term">
            <input type="checkbox" required className="checkbox"/>
            <p>Agree to the terms of use & privacy policy</p>
          </div>

          
          <div className="login-account">
            <p>
              {hasAccount ? "Create Account ?" : "Already have an account ?"}{" "}
              <span onClick={toggleAccountMode}>Click Here!</span>
            </p>
          </div>
        </form>

        {/* Image Section */}
       
      </div>
    </div>
  );
};

export default Login;
