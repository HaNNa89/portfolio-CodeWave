import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";

interface HamburgerMenuProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const scrollToTeam = () => {
  scroller.scrollTo("team", {
    duration: 800, // Scroll duration in milliseconds
    delay: 0, // Delay before scrolling starts (milliseconds)
    smooth: "easeInOutQuart", // Scrolling animation easing function
    offset: -100, // Offset to adjust the scroll position (negative value scrolls up)
  });
};

const scrollFindUs = () => {
  scroller.scrollTo("findus", {
    duration: 800, // Scroll duration in milliseconds
    delay: 0, // Delay before scrolling starts (milliseconds)
    smooth: "easeInOutQuart", // Scrolling animation easing function
    offset: -100, // Offset to adjust the scroll position (negative value scrolls up)
  });
};

function HamburgerMenu({ isLoggedIn, handleLogout }: HamburgerMenuProps) {
  const [hamburgerMenu, setHamburgerMenu] = React.useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setHamburgerMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburgerMenu(null);
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
        <MenuIcon sx={menuIcon} />
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
        {isLoggedIn ? (
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
        )}
      </Menu>
    </>
  );
}

export default HamburgerMenu;
