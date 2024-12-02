import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { assets } from '../assets/assets_frontend/assets';
import { Divider, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      position="sticky"
      sx={{
        width: '100%',
        zIndex: '1'
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "blue",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: "flex",
              alignItems: "center",
            }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          >
            <img
              src={assets.logo}
              alt="Logo"
              style={{ width: "160px" }}
            />
            <Typography
              sx={{
                border:"1px solid",
                borderRadius: "30px",
                fontSize:"12px",
                paddingX: "2px",
                color: "#6B7280",
                borderColor: "#6B7280",
                marginLeft: "10px",
              }}
            >
              Admin
            </Typography>
          </IconButton>
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "#5F6FFF",
              borderRadius: "30px",
              textTransform: "none",
            }}
          >
            Create Account
          </Button>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default Navbar;
