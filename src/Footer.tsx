import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={footer}>
      <Box sx={titlebox}></Box>

      <Box sx={footerbox}>
        <Box sx={box1}>
          <Typography variant="h4" sx={bigtitle}>
            FIND US
          </Typography>
          <Typography sx={title}> ADDRESS</Typography>
          <Typography sx={text}>
            Anders Perssonsgatan 18 <br /> 416 64 Gothenburg
          </Typography>
          <Typography sx={title}> CONTACT</Typography>
          <Typography sx={text}>
            Tel: 000-00 00 000
            <br /> Email: info@codewave.com
            <br /> Linkedin: @Codewave
          </Typography>
        </Box>
        <Box sx={box2}> </Box>
      </Box>
    </Box>
  );
}

const footer = {
  width: "100%",
  margin: 0,
  backgroundColor: "#1F342E",
  height: "33rem",
  marginBottom: 0,
};

const footerbox = {
  display: "flex",
  justifyContent: "space-around",
};

const titlebox = {
  width: "100%",
  height: "3rem",
  display: "flex",
  justifyContent: "flexStart",
  marginLeft: "3rem",
};

const bigtitle = {
  fontFamily: "Lexend giga",
  color: "white",
  marginBottom: "2rem",
};
const title = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "Lexend giga",
};

const text = {
  color: "white",
  fontFamily: "Lexend giga",
  fontSize: "11pt",
  paddingBottom: "1rem",
};
const box1 = {
  width: "40%",
};

const box2 = {
  width: "40%",
  backgroundImage: "url('public/images/karta.png')",
  height: "20rem",
};

export default Footer;
