import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { team } from "../../data/index"; // Import team data

function ProfileCard() {
  return (
    <>
      <Typography ml={8} variant="h4">
        OUR TEAM
      </Typography>
      <Box sx={profilecontainer}>
        <Grid container spacing={1}>
          {team.map((consultant) => (
            <Grid item xs={12} sm={6} md={3} key={consultant.name}>
              <Link to={`/team/${encodeURIComponent(consultant.name)}`}>
                <Box mb={10} mt={10} sx={cardprofile}>
                  <img
                    src="public/pictures/girl.jpg"
                    alt="girl"
                    style={{
                      borderRadius: "20px",
                      maxWidth: "12rem",
                      height: "auto",
                    }}
                  />

                  <Typography mt={1} sx={cardtitle}>
                    {consultant.name}
                  </Typography>
                  <Typography sx={cardtext}>Frontend developer</Typography>
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
  flexDirection: "row",
  justifyContent: "center",
};

const cardprofile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
};

const cardtitle = {
  fontFamily: "Lexend giga",
  fontSize: 12,
};

const cardtext = {
  fontFamily: "Lexend giga",
  fontSize: 10,
};

export default ProfileCard;
