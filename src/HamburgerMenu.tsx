import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { LuWaves } from "react-icons/lu";
import { scroller } from "react-scroll";

// interface HamburgerMenuProps {
//   isLoggedIn: boolean;
//   handleLogout: () => void;
// }

function HamburgerMenu() {
  const [hamburgerMenu, setHamburgerMenu] = React.useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setHamburgerMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburgerMenu(null);
  };

  const scrollToTeam = () => {
    scroller.scrollTo("team", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    handleMenuClose(); // Close the menu after clicking a link
  };

  const scrollFindUs = () => {
    scroller.scrollTo("findus", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    handleMenuClose(); // Close the menu after clicking a link
  };

  const menuItems = {
    fontFamily: "Lexend Giga",
  };

  const menuIcon = {
    fontSize: "2.5rem",
    color: "black",
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <LuWaves style={menuIcon} />
      </IconButton>

      <Menu
        anchorEl={hamburgerMenu}
        open={Boolean(hamburgerMenu)}
        onClose={handleMenuClose}
      >
        <MenuItem sx={menuItems} onClick={scrollToTeam}>
          Our Team
        </MenuItem>
        <MenuItem sx={menuItems} onClick={scrollFindUs}>
          Find Us
        </MenuItem>
        {/* {isLoggedIn ? (
          <MenuItem sx={menuItems} onClick={handleLogout}>
            Logout
          </MenuItem>
        ) : (
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/login"
          >
            <MenuItem sx={menuItems}>Login</MenuItem>
          </NavLink>
        )} */}
      </Menu>
    </>
  );
}

export default HamburgerMenu;
