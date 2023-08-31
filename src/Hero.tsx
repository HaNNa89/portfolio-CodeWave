import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme();

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <img style={heroImage} src="/images/hero.png" alt="hero" />
      <Container style={heroTextContainer}>
        <Typography style={heroText} variant="h3">
          Your VISION, our EXPERTISE <br /> Turn your ideas into reality with
          our consultants
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

theme.typography.h3 = {
  fontSize: "1rem", // for mobile
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
  width: "60%",
};

const heroText = {
  color: "#1B1B1B",
  fontFamily: "Lexend giga",
};
