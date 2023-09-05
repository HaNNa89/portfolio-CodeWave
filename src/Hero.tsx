import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const theme = createTheme();

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box style={backgroundColor}>
      <ThemeProvider theme={theme}>
        {isMobile ? (
          <div>
            <Box style={marginBox}></Box>
          </div>
        ) : null}
        <img style={heroImage} src="/images/hero.png" alt="hero" />
        <Container style={heroTextContainer}>
          <style>
            {`
          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
              transform: translateX(-20%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
          </style>
          <Typography style={heroText} variant="h3">
            Your VISION, our EXPERTISE <br /> Turn your ideas into reality with
            our consultants
          </Typography>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

const marginBox = {
  height: "250px",
  backgroundColor: "#83BDC0",
};

theme.typography.h3 = {
  fontSize: "1.2rem", // for mobile
  "@media (min-width:600px)": {
    fontSize: "1.3rem", // for tablet
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem", // for desktop
  },
};

const heroImage = {
  height: "auto",
  width: "100%",
};

const heroTextContainer: React.CSSProperties = {
  position: "absolute",
  top: "100px",
  left: "3%",
  opacity: 0,
  animation: "fadeInAnimation 1.5s ease-in-out 1s forwards",
  width: "80%",
  marginTop: "1rem",
};

const heroText = {
  color: "#1B1B1B",
  fontFamily: "Lexend giga",
};

const backgroundColor = {
  backgroundColor: "#83BDC0",
};
