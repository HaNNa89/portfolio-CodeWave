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
			console.log(`User ${values.username} you are registered!`);
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
					Please fill in the fields correctly before you can register.
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
