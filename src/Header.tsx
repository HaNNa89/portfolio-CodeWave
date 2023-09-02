import { AppBar, Box, MenuItem, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CodeWave from "./assets/codewave.png";
import HamburgerMenu from "./HamburgerMenu";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      console.log(`User ${storedUsername} has signed out.`);
      localStorage.removeItem("username");
      setIsLoggedIn(false);
    }
  };

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

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setIsLoggedIn(!!storedUsername);
  }, []);

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
          <Link to="/">
            <img
              src={CodeWave}
              style={{ width: "5.3rem", height: "auto", padding: "1rem" }}
              alt="logotyp"
            />
          </Link>
          <Box sx={menuList}>
            <MenuItem sx={menuItem}>
              Our Team
            </MenuItem>
            <MenuItem sx={menuItem}>
              Find Us
            </MenuItem>
            <MenuItem sx={menuItem}>
              {isLoggedIn ? (
                <button onClick={handleLogout} style={{background: "none", color: "black",
                fontSize: "1rem",
                fontFamily: "lexend giga", border: "none"}} >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </NavLink>
              )}
            </MenuItem>
          </Box>
          <HamburgerMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
