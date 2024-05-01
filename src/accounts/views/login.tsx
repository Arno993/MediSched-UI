import React, { useState } from "react";
import Cookies from "js-cookie";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/login";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login({ username, password });
      Cookies.set("uid", result.uid, { expires: 3 });
      navigate("/home");
    } catch (error: any) {
      console.error("Login Error:", error);
      alert("Failed to login: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
