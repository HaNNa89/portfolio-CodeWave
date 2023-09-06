import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { team } from "../../data/index";

function ProfileCard() {
  return (
    <>
      <div id="team"></div>
      <Box sx={profilecontainer}>
        <Typography
          ml={0}
          variant="h4"
          sx={{ fontFamily: "Lexend giga", marginTop: "1.5rem" }}
        >
          OUR TEAM
        </Typography>
        <Grid container spacing={0}>
          {team.map((consultant) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={consultant.name}>
              <Link
                to={`/team/${encodeURIComponent(consultant.name)}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box mb={5} mt={3} sx={cardprofile}>
                  <img
                    src={consultant.imgurl}
                    alt="girl"
                    style={{
                      borderRadius: "20px",
                      maxWidth: "14rem",
                      height: "auto",
                    }}
                  />
                  <Box sx={infobox}>
                    <Typography mt={1} sx={cardtitle}>
                      {consultant.name}
                    </Typography>
                    <Typography sx={cardtext}>Frontend developer</Typography>
                    <Typography sx={description}>
                      {consultant.littledescription}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const profilecontainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "7rem",
  paddingRight: "7rem",
};

const cardprofile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // padding: "10px",
  filter: "brightness(0.8)",
  "&:hover": {
    transform: "scale(1.05)", 
    filter: "brightness(1.0)",
  },
};

const infobox = {
  width: "14rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const cardtitle = {
  fontFamily: "Montserrat",
  fontSize: 18,
  fontWeight: "bold",
};

const cardtext = {
  fontFamily: "Montserrat",
  fontSize: 15,
};

const description = {
  fontFamily: "Montserrat",
  fontSize: 14,
  marginTop: "0.5rem",
  color: "grey",
};

export default ProfileCard;
