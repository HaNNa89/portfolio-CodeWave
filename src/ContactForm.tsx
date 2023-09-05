import { Box, Button, InputLabel, TextField } from "@mui/material";
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
    <>
      <Box style={fromContainer}>
        <h5 style={ContactTitle}>Contact me</h5>
        <InputLabel sx={inputLabel}>Name:</InputLabel>
        <TextField
          InputProps={{
            style: {
              borderRadius: "5rem",
            },
          }}
          id="outlined-basic"
          variant="outlined"
        />
        <InputLabel sx={inputLabel}>Email*:</InputLabel>
        <TextField
          InputProps={{
            style: {
              borderRadius: "5rem",
            },
          }}
          id="outlined-basic"
          variant="outlined"
        />
        <InputLabel sx={inputLabel}>Your message:*</InputLabel>
        <TextField
          InputProps={{
            style: {
              borderRadius: "2rem",
            },
          }}
          multiline
          rows={4}
          id="outlined-basic"
          variant="outlined"
        />
        <Button sx={buttonStyle} disableRipple variant="text">
          Send
        </Button>
      </Box>
    </>
  );
}

const fromContainer = {
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
  // marginTop: "1rem",
};

const buttonStyle = {
  backgroundColor: "#28594B",
  borderRadius: "5rem",
  width: "7rem",
  textTransform: "none",
  color: "#FBF9F3",
  // marginTop: "1rem",
  boxShadow: "none",
  fontFamily: "Lexend giga",
  "&:hover": {
    backgroundColor: "#1b1b1b ",
  },
};
