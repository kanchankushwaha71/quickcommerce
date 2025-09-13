import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the server
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store token and user profile in localStorage
      localStorage.setItem("token", response.data.token); // Store token
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user profile info

      alert("Login successful!");
      
      // Redirect to Profile Page or Navbar after login
      navigate("/profile"); // Redirect to Profile Page
    } catch (err) {
      setError(err.response?.data?.message || "Login failed, please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>WELCOME BACK</h1>
        <p>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <p>Don’t have an account? <a href="#">Sign up for free!</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
