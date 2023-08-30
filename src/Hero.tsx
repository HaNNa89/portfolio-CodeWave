import { Typography } from "@mui/material";

const heroImage = {
  height: "auto",
  width: "100%",
};

const heroSlogan: React.CSSProperties = {
  position: "absolute",
  top: "150px",
  left: "5%",
  color: "#1B1B1B",
  fontFamily: "Lexend giga",
};

export default function Hero() {
  return (
    <>
      <img style={heroImage} src="/images/hero.png" alt="hero" />
      <Typography style={heroSlogan}>
        Your VISION, our EXPERTISE - Turn your ideas into reality with our
        consultants
      </Typography>
    </>
  );
}
