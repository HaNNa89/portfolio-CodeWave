import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  const [hamburgerMenu, setHamburgerMenu] = React.useState(null);

  const handleMenuOpen = (event: any) => {
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

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  //   handleMenuClose();
  // };

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
          <MenuItem
            sx={menuItems}
            // onClick={() => scrollToSection("our-team")}
          >
            Our Team
          </MenuItem>
        <MenuItem sx={menuItems} 
        // onClick={() => scrollToSection("find-us")}
        >
          Find Us
        </MenuItem>
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/login">
          <MenuItem sx={menuItems}>Login</MenuItem>
        </NavLink>
      </Menu>
    </>
  );
}

export default HamburgerMenu;
