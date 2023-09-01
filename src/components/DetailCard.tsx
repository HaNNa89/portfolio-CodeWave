import { Box, Grid, Typography } from "@mui/material";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaFigma, FaReact } from "react-icons/fa";
import { consults } from "../../data/index";

function DetailCard() {
  return (
    <div>
      {consults.map((consult) => (
        <Grid container spacing={5} key={consult.name}>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            style={{
              marginTop: "5rem",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end", lg: "flex-end" },
              flexDirection: "column",
            }}
          >
            <img
              src="public/pictures/girl.jpg"
              alt="Stena line"
              style={{ maxHeight: "40rem" }}
            />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            style={{
              marginTop: "5rem",
              marginBottom: "2rem",
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start", lg: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                fontFamily: "Lexend giga",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {consult.name}
            </Typography>
            <Typography
              style={{
                width: "27rem",
                fontFamily: "montserrat",
                marginBottom: "1.5rem",
              }}
            >
              {consult.description}
            </Typography>
            <Typography
              style={{
                fontFamily: "Lexend giga",
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              KOMPETENSER:
            </Typography>
            <Box style={{ display: "flex" }}>
              <AiFillHtml5 size={40} /> <FaCss3Alt size={40} />
              <BiLogoTypescript size={40} />
              <BiLogoJavascript size={40} />
              <FaReact size={40} />
              <FaFigma size={40} />
            </Box>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default DetailCard;
