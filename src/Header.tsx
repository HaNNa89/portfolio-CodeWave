import { AppBar, Box, MenuItem, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import CodeWave from "./assets/codewave.png";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const menuItem = {
    display: { xs: "none", sm: "block" },
    color: "black",
    fontSize: "1rem",
    fontFamily: "lexend giga",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "transparent",
      color: "#28594B",
      borderBottom: "2px solid #28594B",
    },
  };

  const menuList = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "0 4rem",
  };

  const scrollToTeam = () => {
    scroller.scrollTo("team", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  const scrollFindUs = () => {
    scroller.scrollTo("findus", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  const [headerBackground, setHeaderBackground] = useState("transparent");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogout = () => {
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedUsername) {
  //     console.log(`User ${storedUsername} has signed out.`);
  //     localStorage.removeItem("username");
  //     setIsLoggedIn(false);
  //   }
  // };

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

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem("username");
  //   setIsLoggedIn(!!storedUsername);
  // }, []);

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
            <MenuItem sx={menuItem} onClick={scrollToTeam}>
              Our Team
            </MenuItem>
            <MenuItem sx={menuItem} onClick={scrollFindUs}>
              Find Us
            </MenuItem>
            {/* <MenuItem sx={menuItem}>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    color: "black",
                    fontSize: "1rem",
                    fontFamily: "lexend giga",
                    border: "none",
                  }}
                >
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
            </MenuItem> */}
          </Box>
          <HamburgerMenu
          //  isLoggedIn={isLoggedIn}
          //  handleLogout={handleLogout}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
