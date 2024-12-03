import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const drawerWidth = 280;

const Sidebar = () => {

  const [selected, setSelected] = useState<string | undefined>("");

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const savedState = sessionStorage.getItem("state:");
    if (savedState) {
      setSelected(savedState);
    }
  }, []);
  
  useEffect(() => {
    if (selected) {
      sessionStorage.setItem("state:", selected);
    }
  }, [selected]);

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            zIndex: "1",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List >
          <Link
            to="dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
        <List>
          <Link to="dashboard" style={{ textDecoration: "none", color: "black" }}>
            <ListItem
              disablePadding
              sx={{
                color: "gray",
                borderRight: selected === "dashboard" ? "4px solid #5F6FFF" : "",
                background: selected === "dashboard" ? "#F2F3FF" : "",
              }}
            >
              <ListItemButton onClick={() => setSelected("dashboard")}>
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="appointments" style={{ textDecoration: "none", color: "black" }}>
            <ListItem
              disablePadding
              sx={{
                color: "gray",
                borderRight: selected === "appointments" ? "4px solid #5F6FFF" : "",
                background: selected === "appointments" ? "#F2F3FF" : "",
              }}
            >
              <ListItemButton onClick={() => setSelected("appointments")}>
                <ListItemIcon >
                  <CalendarMonthOutlinedIcon />
                </ListItemIcon>
                <ListItemText  primary="Appointments" sx={{ color: "gray" }} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="add-doctor" style={{ textDecoration: "none", color: "black" }}>
            <ListItem
              disablePadding
              sx={{
                color: "gray",
                borderRight: selected === "add-doctor" ? "4px solid #5F6FFF" : "",
                background: selected === "add-doctor" ? "#F2F3FF" : "",
              }}
            >
              <ListItemButton onClick={() => setSelected("add-doctor")}>
                <ListItemIcon>
                  <AddBoxOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add Doctor" sx={{ color: "gray" }} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="doctors-list" style={{ textDecoration: "none", color: "black" }}>
            <ListItem
              disablePadding
              sx={{
                color: "gray",
                borderRight: selected === "doctors-list" ? "4px solid #5F6FFF" : "",
                background: selected === "doctors-list" ? "#F2F3FF" : "",
              }}
            >
              <ListItemButton onClick={() => setSelected("doctors-list")}>
                <ListItemIcon>
                  <PeopleAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Doctors List" sx={{ color: "gray" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
