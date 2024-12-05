import { Box, Container, Typography } from "@mui/material"
import { assets } from "../assets/assets_frontend/assets"
const title = [{
  head: "EFFICIENCY:",
  body:"Streamlined appointment scheduling that fits into your busy lifestyle."
},
{
  head: "CONVENIENCE: ",
  body:"Access to a network of trusted healthcare professionals in your area."
},
{
  head: "PERSONALIZATION:",
  body:"Tailored recommendations and reminders to help you stay on top of your health."
}]
const About = () => {
  return (
    <Container maxWidth="xl" sx={{marginTop:"100px"}}>
      <Typography variant="h4" sx={{textAlign:"center" , fontWeight:"500" , color:"gray"}}>ABOUT <span style={{color:"black"}}>US</span></Typography>
      <Box sx={{display:"flex", marginTop:"50px"}}>
        <Box ><img src={assets.about_image} alt="" style={{width:"400px" , textAlign:"center"}} /></Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"20px" , justifyContent:"center" , width:"870px" , marginLeft:"50px"}}>
          <Typography variant="body2">Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</Typography>
          <Typography variant="body2">Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</Typography>
          <Typography variant="body2" sx={{fontWeight:"600"}}>Our Vision</Typography>
          <Typography variant="body2">Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</Typography>
          </Box>
      </Box>
      <Typography variant="h6" sx={{marginTop:"40px" , marginBottom:"15px"}}>WHY CHOOSE US</Typography>
      <Box sx={{display:"flex"}}>
        {
            title.map((typo,index)=> 
            <Box key={index} sx={{padding:"70px", border:"1px solid #D3D3D3" , rowGap:"10px" ,
              transition:"0.4s ease",
              ":hover":{
              background:"#5F6FFF",
              color:"white"
            }}}>
            <Typography sx={{fontWeight:"600", color:"GrayText"}}>{typo.head}</Typography>
            <Typography sx={{color:"GrayText"}}>{typo.body}</Typography>
          </Box>

            )
        }
      </Box>
    </Container>
  )
}

export default About
