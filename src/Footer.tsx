import { Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={footer}>
      <Box sx={box1}>TEXT</Box>
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

const box1 = {
  width: "40%",
  backgroundColor: "blue",
};

const box2 = {
  width: "40%",
  backgroundColor: "pink",
};

export default Footer;
