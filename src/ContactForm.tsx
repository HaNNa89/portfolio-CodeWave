import { Box, Button, InputLabel, TextField } from "@mui/material";

export default function ContactForm() {
  return (
    <>
      <Box style={fromContainer}>
        <h5 style={ContactTitle}>Contact me</h5>
        {/* NAME INPUT */}
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
        {/* EMAIL INPUT */}
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
        {/* MESSAGE INPUT */}
        <InputLabel sx={inputLabel}>Your message:*</InputLabel>
        <TextField
          InputProps={{
            style: {
              borderRadius: "5rem",
            },
          }}
          id="outlined-basic"
          variant="outlined"
        />

        <Button
          sx={{
            backgroundColor: "#28594B",
            borderRadius: "5rem",
            width: "7rem",
            textTransform: "none",
            color: "#FBF9F3",
            marginTop: "1rem",
            boxShadow: "none",
            fontFamily: "Lexend giga",
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
  width: "50%",
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

const inputLabel = {
  fontFamily: "Montserrat",
  marginLeft: "0.5rem",
};
