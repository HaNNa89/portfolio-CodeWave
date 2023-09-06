import { Box, Grid, Typography } from "@mui/material";

function Clients() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        margin: 0,
        backgroundColor: "#28594B",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <Grid container spacing={2} style={containerStyle}>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="/images/stenasvart.png"
            alt="Stena line"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="/images/santamaria 1.png"
            alt="Santa Maria"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="/images/ica-logo-black-and-white.png"
            alt="Description of the image"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="/images/clasohlson.png"
            alt="Description of the image"
            style={imageStyle}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: "black",
        }}
      >
        <Typography sx={TextStyle}>
          Trusted by these leading brands
        </Typography>
      </Box>
    </Box>
  );
}

const containerStyle = {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const imageStyle = {
  maxWidth: "8rem",
  height: "auto",
};

const TextStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  color: "white",
};

export default Clients;
