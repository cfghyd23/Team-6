import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginDonor.css'

const LoginDonor = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login authentication logic here
    // You can use an API call or any other method to authenticate the user

    // Assuming authentication is successful, redirect to "/Dashboard"
    navigate("/Dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginDonor;
