import { useState } from "react";
import { NavLink } from "react-router-dom";
import CodeWave from "../../assets/codewave.png";
import "../Login/Login.css"

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add a state for confirmation password

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value); // Update the confirmation password state
  };

  return (
    <div className="login-container">
      <img className="logo" src={CodeWave} alt="Logotyp" />

      <div className="login-form">
        <div className={`input-container ${username ? "active" : ""}`}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label>Användarnamn</label>
        </div>
        <div className={`input-container ${password ? "active" : ""}`}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Lösenord</label>
        </div>
        <div className={`input-container ${confirmPassword ? "active" : ""}`}>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <label>Bekräfta Lösenord</label>
        </div>

        <button className="login-button">Register Now</button>
      </div>
    </div>
  );
}

export default Register;
