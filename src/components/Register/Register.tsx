import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CodeWave from "../../assets/codewave.png";
import "../Login/Login.css";

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const handleUsernameChange = (event: any) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event: any) => {
		setPassword(event.target.value);
	};

	const handleConfirmPasswordChange = (event: any) => {
		setConfirmPassword(event.target.value);
	};

	const handleRegisterClick = () => {
		localStorage.setItem("username", username);
		console.log(`User ${username} you are registered!`);
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
				<div className={`input-container ${confirmPassword ? "active" : ""}`}>
					<input
						type="password"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
						required
					/>
					<label>Bekräfta Lösenord</label>
				</div>

				<button className="login-button" onClick={handleRegisterClick}>
					Register Now
				</button>
			</div>
		</div>
	);
}

export default Register;
