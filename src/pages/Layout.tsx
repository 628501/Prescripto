import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function Layout() {

  return (
    <Box sx={{ display: "flex", zIndex: "1" }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Content />
    </Box>
  );
}
