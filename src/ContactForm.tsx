import { Button, InputLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string().email("Invalid email format").required("Please enter your email."),
    message: Yup.string().required("Please enter your message."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
    },
  });

  return (
    <form style={formContainer} onSubmit={formik.handleSubmit}>
      <h5 style={ContactTitle}>Contact me</h5>

      <InputLabel sx={inputLabel}>Name:</InputLabel>
      <TextField
        InputProps={{
          style: {
            borderRadius: "5rem",
          },
        }}
        id="name"
        name="name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={errorStyle}>{formik.errors.name}</div>
      ) : null}

      <InputLabel sx={inputLabel}>Email*:</InputLabel>
      <TextField
        InputProps={{
          style: {
            borderRadius: "5rem",
          },
        }}
        id="email"
        name="email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={errorStyle}>{formik.errors.email}</div>
      ) : null}

      <InputLabel sx={inputLabel}>Your message:*</InputLabel>
      <TextField
        InputProps={{
          style: {
            borderRadius: "2rem",
          },
        }}
        multiline
        rows={4}
        id="message"
        name="message"
        variant="outlined"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.message && formik.errors.message ? (
        <div style={errorStyle}>{formik.errors.message}</div>
      ) : null}

      <Button
        type="submit"
        sx={buttonStyle}
        onClick={() => {
          formik.setTouched({
            name: true,
            email: true,
            message: true,
          });
        }}
      >
        Send
      </Button>
    </form>
  );
}

const formContainer = {
  width: "60%",
  display: "grid",
  height: "36rem",
};

const ContactTitle = {
  fontFamily: "Lexend giga",
  fontSize: "1rem",
  backgroundColor: "#83BDC0",
  width: "auto",
  borderRadius: "5rem",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
};

const inputLabel = {
  fontFamily: "Montserrat",
  marginLeft: "0.5rem",
};

const buttonStyle = {
  backgroundColor: "#28594B",
  borderRadius: "5rem",
  width: "7rem",
  textTransform: "none",
  color: "#FBF9F3",
  boxShadow: "none",
  fontFamily: "Lexend giga",
  "&:hover": {
    backgroundColor: "#1b1b1b",
  },
};

const errorStyle = {
  color: "red",
};