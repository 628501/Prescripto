import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { assets } from "../assets/assets_admin/assets";
import { Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "HOME", path: "/home" },
  { label: "ALL DOCTORS", path: "/all-doctors" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      component="nav"
      sx={{
        boxShadow: "none",
        background: "white",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            sx={{
              width: "150px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={assets.admin_logo} alt="Logo" style={{ width: "160px" }} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "black",
                  borderBottom: location.pathname === item.path ? "2px solid #5F6FFF" : "none", 
                }}
              >
                <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.label}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
              variant="contained"
              sx={{
                background: "#5F6FFF",
                paddingX: "30px",
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </Container>
    </AppBar>
  );
};

export default Navbar;
