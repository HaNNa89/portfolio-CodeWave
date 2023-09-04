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
import { useNavigate } from "react-router";
import * as yup from "yup";
import CodeWave from "../../assets/codewave.png";
import "../Login/Login.css";

const RegistrationSchema = yup.object({
	username: yup.string().required("Please enter a username"),
	password: yup
		.string()
		.required("Please enter a password")
		.matches(
			/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/,
			`Invalid input. Allowed characters are letters (both uppercase and lowercase), 
      numbers, and the following special characters: ! @ # $ % ^ & * ) ( + = . _ - . Please try again.`
		)
		.min(10, "Your password must be at least 8 characters long"),
	confirmpassword: yup
		.string()
		.oneOf([yup.ref("password"), ""], "Your passwords must match each other")
		.required("Please confirm your password"),
});

function Register() {
	const navigate = useNavigate();
	const [isPopupOpen, setPopupOpen] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
			confirmpassword: "",
		},
		validationSchema: RegistrationSchema,
		onSubmit: (values) => {
			localStorage.setItem("username", values.username);
			console.log(`User ${values.username} has been registered!`);
			navigate("/");
		},
	});

	const handleRegisterClick = () => {
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
							formik.touched.confirmpassword ? "error" : ""
						}`}
					>
						<TextField
							type="password"
							label="Confirm password"
							name="confirmpassword"
							value={formik.values.confirmpassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.confirmpassword &&
								Boolean(formik.errors.confirmpassword)
							}
							helperText={
								formik.touched.confirmpassword && formik.errors.confirmpassword
							}
							required
							fullWidth
						/>
					</div>
					<button
						className="login-button"
						type="submit"
						onClick={handleRegisterClick}
					>
						Register Now
					</button>
				</form>
			</div>
			<Dialog open={isPopupOpen} onClose={handleClosePopup}>
				<DialogTitle>Error Message:</DialogTitle>
				<DialogContent>
					Registration requires correct information in all fields. Please check
					your inputs.
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

export default Register;
