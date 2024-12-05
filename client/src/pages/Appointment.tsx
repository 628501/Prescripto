import { Box, Button, Chip, Container, Typography } from "@mui/material"
import { assets, doctors } from "../assets/assets_frontend/assets"
import DoctorCard from "../components/DoctorCard"

const Appointement = () => {
  return (
    <Container maxWidth="xl">
    <Box sx={{display:"flex", }}>
        <Box sx={{background:"#5F6FFF" , width:"300px", height:"300px" , marginTop:"85px" , borderRadius:"10px" , position:"relative"}}><img src={assets.doc1} alt="" style={{width:"300px" , position:"absolute" , bottom:"0" }} /></Box>
        <Box sx={{border:"1px solid gray", width:"1200px"  , marginLeft:"20px", marginTop:"85px" , borderRadius:"10px" , padding:"30px"}}>
          <Typography variant="h4" sx={{fontWeight:"700px"}}>Dr. Andrew Williams</Typography>
          <Box sx={{display:"flex" , alignItems:"center"  ,marginBottom:"15px"}}>
          <Typography >MBBS - Gastroenterologist </Typography>
          <Chip label="7 Years" variant="outlined" sx={{marginLeft:"10px"}}/>
          </Box>
          <Typography sx={{fontWeight:"600"}}>About</Typography>
          <Typography sx={{marginBottom:"20px"}}>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.</Typography>
          <Typography sx={{fontWeight:"600" , marginTop:"15px"}} >Appointment fee: $60</Typography>
        </Box>
    </Box>
    <Box sx={{display:"flex", flexDirection:"column" , alignItems:"flex-end" ,width:"890px" , marginTop:"30px"}}>
      <Box sx={{color:"gray"}} >
        <Typography >Booking slots</Typography>
        <Box sx={{marginBottom:"20px"}}>
        <Button variant="outlined" sx={{width:"50px" , padding:"20px" , borderRadius:"30px" , marginRight:"10px" ,color:"gray"}}>Thur 5</Button>
        <Button variant="outlined" sx={{width:"50px" , padding:"20px" , borderRadius:"30px" , marginRight:"10px",color:"gray"}}>Thur 5</Button>
        <Button variant="outlined" sx={{width:"50px" , padding:"20px" , borderRadius:"30px" , marginRight:"10px",color:"gray"}}>Thur 5</Button>
        <Button variant="outlined" sx={{width:"50px" , padding:"20px" , borderRadius:"30px" , marginRight:"10px",color:"gray"}}>Thur 5</Button>
        <Button variant="outlined" sx={{width:"50px" , padding:"20px" , borderRadius:"30px" , marginRight:"10px",color:"gray"}}>Thur 5</Button>
        </Box>
        <Box >
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button>
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button>
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button>
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button>
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button> 
        <Button variant="outlined" sx={{marginRight:"10px",color:"gray"}}>11:00 pm</Button>
        </Box>
        <Button variant="contained" sx={{marginRight:"10px" , marginTop:"20px" , background:"#5F6FFF", borderRadius:"30px" , paddingX:"30px"}}>Book An Appointment</Button>
      </Box>
    </Box>
        <Box sx={{textAlign:"center" , marginTop:"100px"}}>
          <Typography variant="h5" sx={{fontWeight:"600"}}>Related Doctors</Typography>
          <Typography>Simply browse through our extensive list of trusted doctors.</Typography>
        </Box>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '20px',
          marginTop:"50px",
          marginBottom:"50px"
        }}
      >
        {/* Map over doctors array and pass each doctor to DoctorCard */}
        {doctors.slice(0, 2).map((doctor) => (
          <Box key={doctor._id} sx={{ width: '220px' }}>  {/* Set the width of each item */}
            <DoctorCard doctor={doctor} />  {/* Pass doctor data as props */}
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Appointement