import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import CodeWave from "../../assets/codewave.png";
import "./Login.css";

const validationSchema = yup.object({
	username: yup.string().required("Please enter your username"),
	password: yup
		.string()
		.required("Please enter your password")
		.matches(
			/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/,
			"Your password contains invalid characters"
		),
});

function Login() {
	const navigate = useNavigate();
	const [isPopupOpen, setPopupOpen] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			localStorage.setItem("username", values.username);
			console.log(`User ${values.username} has signed in!`);
			navigate("/");
		},
	});

	const handleButtonClick = () => {
		if (!formik.isValid) {
			setPopupOpen(true);
		} else {
			setPopupOpen(false);
			formik.handleSubmit();
		}
	};

	const handleClosePopup = () => {
		setPopupOpen(false);
	};

	return (
		<div className="login-container">
			<img className="logo" src={CodeWave} alt="Logotyp" />

			<div className="login-form">
				<form onSubmit={formik.handleSubmit}>
					<div
						className={`input-container ${
							formik.touched.username && formik.errors.username ? "error" : ""
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
							formik.touched.password && formik.errors.password ? "error" : ""
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
					<div className="create-account">
						<NavLink style={{ color: "#000" }} to="/register">
							Create an account
						</NavLink>
					</div>
					<button
						className="login-button"
						type="button"
						onClick={handleButtonClick}
					>
						Sign in
					</button>
				</form>
			</div>

			<Dialog open={isPopupOpen} onClose={handleClosePopup}>
				<DialogTitle>Error Message:</DialogTitle>
				<DialogContent>
					Please fill in the fields correctly before signing in.
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClosePopup} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Login;
