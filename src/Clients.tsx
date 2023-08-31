import { Box, Grid } from "@mui/material";

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
            src="public/images/stenasvart.png"
            alt="Stena line"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="public/images/santamaria 1.png"
            alt="Santa Maria"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="public/images/ica-logo-black-and-white.png"
            alt="Description of the image"
            style={imageStyle}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <img
            src="public/images/clasohlson.png"
            alt="Description of the image"
            style={imageStyle}
          />
        </Grid>
      </Grid>
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
  maxWidth: "6rem",
  height: "auto",
};

export default Clients;
