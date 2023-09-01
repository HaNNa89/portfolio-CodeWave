import { AppBar, Box, MenuItem, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import CodeWave from "./assets/codewave.png";

function Header() {
  const menuItem = {
    display: { xs: "none", sm: "block" },
    color: "black",
    fontSize: "1rem",
    fontFamily: "lexend giga",
  };

  const menuList = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "0 4rem",
  };

  const [headerBackground, setHeaderBackground] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBackground("rgba(131, 189, 192, 0.6");
    } else {
      setHeaderBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          background: headerBackground,
          boxShadow: "none",
          backdropFilter:
            headerBackground === "transparent" ? "none" : "blur(10px)",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <img
            src={CodeWave}
            style={{ width: "5.3rem", height: "auto", padding: "1rem" }}
            alt="logotyp"
          />

          <Box sx={menuList}>
            <MenuItem sx={menuItem} 
            // onClick={() => scrollToSection("our-team")}
            >
              Our Team</MenuItem>
            <MenuItem sx={menuItem} 
            // onClick={() => scrollToSection("find-us")}
            >
              Find Us</MenuItem>
            <MenuItem sx={menuItem}>
            <NavLink to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                Login
            </NavLink>
            </MenuItem>
          </Box>

          <HamburgerMenu />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
