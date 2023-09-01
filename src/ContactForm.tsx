import { Box, Button, TextField } from "@mui/material";

export default function ContactForm() {
  return (
    <>
      <Box style={fromContainer}>
        <h5 style={ContactTitle}>Contact me</h5>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Your message"
          variant="outlined"
          required
        />
        <Button
          sx={{
            backgroundColor: "#28594B",
            borderRadius: "5rem",
            width: "7rem",
            textTransform: "none",
            color: "#FBF9F3",
          }}
          variant="contained"
        >
          Send
        </Button>
      </Box>
    </>
  );
}

const fromContainer = {
  width: "30rem",
  display: "grid",
};

const ContactTitle = {
  fontFamily: "Lexend giga",
  fontSize: "1rem",
  backgroundColor: "#83BDC0",
  width: "auto",
  borderRadius: "5rem",
  padding: "1rem",
};
