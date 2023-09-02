import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { team } from "../../data/index"; // Import team data

function ProfileCard() {
  return (
    <>
      <Typography
        ml={8}
        variant="h4"
        sx={{ fontFamily: "Lexend giga", marginTop: "1.5rem" }}
      >
        OUR TEAM
      </Typography>
      <Box sx={profilecontainer}>
        <Grid container spacing={1}>
          {team.map((consultant) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={consultant.name}>
              <Link
                to={`/team/${encodeURIComponent(consultant.name)}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box mb={10} mt={10} sx={cardprofile}>
                  <img
                    src="public/pictures/girl.jpg"
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
  flexDirection: "row",
  justifyContent: "center",
};

const cardprofile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
};

const infobox = {
  width: "14rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const cardtitle = {
  fontFamily: "lexend giga",
  fontSize: 14,

  // "@media (max-width: 600px)": {
  //   alignSelf: "center",
  // },
};

const cardtext = {
  fontFamily: "Lexend giga",
  fontSize: 12,
  fontWeight: "bold",
};

const description = {
  fontFamily: "Lexend giga",
  fontSize: 10,
  marginTop: "0.5rem",
};

export default ProfileCard;
