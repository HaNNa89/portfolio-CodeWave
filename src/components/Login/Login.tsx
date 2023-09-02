import { TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import CodeWave from "../../assets/codewave.png";
import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("Användarnamn är obligatoriskt."),
  password: yup
    .string()
    .required("Lösenord är obligatoriskt")
    .matches(
      /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/,
      "Lösenordet innehåller ogiltiga tecken."
    )
    .min(10, "Lösenordet behöver vara minst 10 tecken långt."),
});

function Login() {
  const navigate = useNavigate();

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


  return (
    <div className="login-container">
      <img className="logo" src={CodeWave} alt="Logotyp" />

      <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
          <div className={`input-container ${formik.touched.username && formik.errors.username ? "error" : ""}`}>
            <TextField
              type="text"
              label="Användarnamn"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={(formik.touched.username && formik.errors.username) && formik.errors.username}
              required
              fullWidth
            />
          </div>
          <div className={`input-container ${formik.touched.password && formik.errors.password  ? "error" : ""}`}>
            <TextField
              type="password"
              label="Lösenord"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={(formik.touched.password && formik.errors.password) && formik.errors.password}
              required
              fullWidth
            />
          </div>
          <div className="create-account">
            <NavLink style={{ color: "#000" }} to="/register">
              Skapa ett konto
            </NavLink>
          </div>
          <button className="login-button" type="button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
