import { Box, Typography } from "@mui/material";
import DoctorCard from "./DoctorCard";
import { doctors } from "../assets/assets_frontend/assets";
const DoctorsList = () => {
  return (
    <Box sx={{ background: "#F8F9FD", paddingBottom: "30px" }}>
      <Typography variant="h5">All Doctors</Typography>
      <DoctorCard doctors={doctors} />
    </Box>
  );
};

export default DoctorsList;
