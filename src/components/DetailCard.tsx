import { Box, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaFigma, FaReact } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { team } from "../../public/Data/index";
import ContactForm from "../ContactForm";

function DetailCard() {
  interface Consultant {
    name: string;
    description: string;
  }

  const { name } = useParams();

  const consultant = team.find(
    (consultant: Consultant) => consultant.name === name
  );

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Team - Codewave {consultant.name}</title>
      </Helmet>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          justifyContent: "space-between",
          paddingTop: "1rem",

          fontFamily: "Lexend Giga",
          textDecoration: "none",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img
            src="/images/codewave.png"
            style={{ width: "5.3rem", height: "auto", padding: "1rem" }}
            alt="logotyp"
          />
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoIosArrowRoundBack size={30} /> Back to homepage
        </Link>
        <Box sx={{ width: "10rem" }}></Box>
      </Box>
      <Grid
        container
        spacing={5}
        key={consultant.name}
        style={{ marginBottom: "2rem" }}
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          style={{
            marginTop: "5rem",
            display: "flex",
            marginBottom: "2rem",
          }}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-end",
            },
            flexDirection: "column",
          }}
        >
          <img src={consultant.imgurl} alt="img" style={image} />
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
            marginTop: {
              lg: "5rem",
              md: "0rem",
              sm: "0rem",
            },
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lexend giga",
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",

              maxWidth: { xs: "19rem", sm: "28rem", md: "28rem" },
            }}
          >
            {consultant.name}
          </Typography>
          <Typography
            sx={{
              maxWidth: { xs: "19rem", sm: "28rem", md: "28rem" },
              fontFamily: "montserrat",
              fontSize: "1.2rem",
              marginBottom: "1.5rem",
            }}
          >
            {consultant.description}
          </Typography>
          <Typography
            style={{
              fontFamily: "Lexend giga",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            KNOWLEDGE:
          </Typography>
          <Box style={{ display: "flex" }}>
            <AiFillHtml5 size={40} /> <FaCss3Alt size={40} />
            <BiLogoTypescript size={40} />
            <BiLogoJavascript size={40} />
            <FaReact size={40} />
            <FaFigma size={40} />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: {
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <ContactForm />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const image = {
  maxWidth: "22rem",
  borderRadius: "20px",
  "@media (maxWidth: 960px)": {
    maxWidth: "20rem",
  },
};

export default DetailCard;
