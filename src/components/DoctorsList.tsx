import { Box, Typography } from "@mui/material"
import DoctorCard from "./DoctorCard"
import { doctors } from "../assets/assets_frontend/assets"
const DoctorsList = () => {
  return (
    <Box>
      <Typography variant="h4" >All Doctors</Typography>

      <DoctorCard doctors={doctors} />
    </Box>
  )
}

export default DoctorsList