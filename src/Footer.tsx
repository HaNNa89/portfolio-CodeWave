import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={footer}>
      <Box sx={titlebox}>
        <Typography variant="h4" sx={bigtitle}>
          FIND US
        </Typography>
      </Box>

      <Box sx={footerbox}>
        <Box sx={box1}>
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
  height: "auto",
  bottom: 0,
  position: "fixed",
  "@media (max-width: 1024px)": {
    height: "auto",
  },
};

const footerbox = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "25rem",
  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    height: "40rem",
  },
};

const titlebox = {
  width: "80%",
  display: "flex",
  paddingLeft: "3rem",
  paddingTop: "1rem",
  justifyContent: "flexStart",
};

const bigtitle = {
  fontFamily: "Lexend giga",
  color: "white",
  "@media (max-width: 1024px)": {
    marginBottom: "1.5rem",
  },
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
  "@media (max-width: 1024px)": {
    width: "80%",
  },
};

const box2 = {
  width: "45%",
  backgroundImage: "url('public/images/karta.png')",
  height: "20rem",
  marginBottom: "1rem",
  "@media (max-width: 1024px)": {
    width: "80%",
    height: "30rem",
  },
  "@media (max-width: 600px)": {
    height: "20rem",
  },
};

export default Footer;
