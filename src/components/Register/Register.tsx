import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import CodeWave from "../../assets/codewave.png";
import "../Login/Login.css";

const RegistrationSchema = yup.object({
	username: yup.string().required("Username must be used"),
	password: yup
		.string()
		.required("password must be used")
		.matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/, "pasword not correct")
		.min(10, "password must have at least 10 characters"),
	confirmpassword: yup
		.string()
		.oneOf([yup.ref("password"), ""], "password must be the same")
		.required("confirm password is required"),
});

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: RegistrationSchema,
		onSubmit: (values) => {
			localStorage.setItem("username", values.username);
			console.log(`User ${values.username} you are registered!`);
			navigate("/");
		},
	});

	const handleRegisterClick = () => {
		localStorage.setItem("username", username);
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
				<form onSubmit={formik.handleSubmit}>
					<div
						className={`input-container ${
							formik.touched.username ? "error" : ""
						}`}
					>
						<TextField
							type="text"
							label="Username"
							name="username"
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.username && Boolean(formik.errors.username)}
							helperText={formik.touched.username && formik.errors.username}
							required
							fullWidth
						/>
					</div>
					<div
						className={`input-container ${
							formik.touched.username ? "error" : ""
						}`}
					>
						<TextField
							type="password"
							label="Password"
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
							required
							fullWidth
						/>
					</div>
					<div
						className={`input-container ${
							formik.touched.confirmPassword ? "error" : ""
						}`}
					>
						<TextField
							type="text"
							label="Confirm password"
							name="confirmpassword"
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.touched.confirmPassword && formik.errors.confirmPassword
							}
							required
							fullWidth
						/>
					</div>
				</form>

				<button className="login-button" onClick={handleRegisterClick}>
					Register Now
				</button>
			</div>
		</div>
	);
}

export default Register;
