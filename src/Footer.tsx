import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={footer}>
      <Box sx={box1}>
        <Typography sx={title}> ADDRESS</Typography>
        <Typography>Anders Perssonsgatan 18 416 64 Gothenburg</Typography>
        <Typography sx={title}> CONTACT</Typography>
        <Typography>
          Tel: 000-00 00 000 Email: info@codewave.com Linkedin: @Codewave
        </Typography>
      </Box>
      <Box sx={box2}> BILD</Box>
    </Box>
  );
}

const footer = {
  width: "100%",
  margin: 0,
  backgroundColor: "#1F342E",
  height: "20rem",
  marginBottom: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const title = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "Montserrat",
};
const box1 = {
  width: "40%",
  backgroundColor: "blue",
};

const box2 = {
  width: "40%",
  backgroundColor: "pink",
};

export default Footer;
