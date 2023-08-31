import { Box, Grid } from "@mui/material";

function Clients() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        margin: 0,
        backgroundColor: "#28594B",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item xs={3}>
          2
        </Grid>
        <Grid item xs={3}>
          3
        </Grid>
        <Grid item xs={4}>
          3
        </Grid>
      </Grid>
    </Box>
  );
}

export default Clients;
