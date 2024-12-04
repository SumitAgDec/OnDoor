import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="login-section">
      <div className="login-section min-h-screen flex items-center justify-center md:justify-start px-4">
        <form className="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="btn btn-primary bg-customBlue border-none hover:bg-lightCustomBlue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
