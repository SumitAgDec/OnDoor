import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userProfile, setuserProfile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userProfile", userProfile);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post("/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setuserProfile(null);
      setFullName("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form enctype="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Profile (optional)
          </label>
          <input
            className="form-control"
            type="file"
            name="productImage"
            onChange={(e) => setuserProfile(e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            placeholder="Enter your Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
          onClick={handleSignup}
          type="submit"
          className="btn btn-primary"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
