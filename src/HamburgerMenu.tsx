import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";

function HamburgerMenu() {
  const [hamburgerMenu, setHamburgerMenu] = React.useState(null);

  const handleMenuOpen = (event: any) => {
    setHamburgerMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburgerMenu(null);
  };

  const menuItems = {
    fontFamily: 'Lexend Giga',
  };

  const menuIcon = {
    fontSize: '2.5rem', color: 'black'
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
        <MenuItem sx={menuItems}>Our Team</MenuItem>
        <MenuItem sx={menuItems}>Find Us</MenuItem>
        <MenuItem sx={menuItems}>Login</MenuItem>
      </Menu>
    </>
  );
}

export default HamburgerMenu;
