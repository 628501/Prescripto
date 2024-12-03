import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { assets } from "../assets/assets_admin/assets";
import { Chip } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          zIndex: "2",
          boxShadow: "none",
          background: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              width: "150px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={assets.admin_logo} alt="" style={{ width: "160px" }} />
            <Chip label="Admin" variant="outlined" sx={{marginLeft:"10px"}}/>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
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
      </AppBar>
      <nav></nav>
    </Box>
  );
}
