import { useState, useEffect } from "react";
import CodeWave from "../../assets/codewave.png";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSignInClick = () => {
      localStorage.setItem("username", username);
      console.log(`User ${username} has signed in!.`);
      navigate("/");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

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
        <div className="create-account">
          <NavLink to="/register">Skapa ett konto</NavLink>
        </div>

        <button className="login-button" onClick={handleSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
