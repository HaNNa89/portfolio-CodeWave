import { AppBar, Box, MenuItem, Toolbar } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import CodeWave from './assets/CodeWave.png';

function Header() {
    const menuItem = {
        display: { xs: 'none', sm: 'block' },
        color: 'black',
        fontSize: '1rem',
        fontFamily: 'lexend giga'
    }

    const menuList = {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem', 
        padding: '0 4rem'
    }

    return (
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <img src={CodeWave} style={{ width: '5.3rem', height: 'auto', padding: '1rem' }} alt="logotyp" />    

                <Box sx={menuList}>
                    <MenuItem sx={menuItem}>Our Team</MenuItem>
                    <MenuItem sx={menuItem}>Find Us</MenuItem>
                    <MenuItem sx={menuItem}>Login</MenuItem>
                </Box>
                
                <HamburgerMenu />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
