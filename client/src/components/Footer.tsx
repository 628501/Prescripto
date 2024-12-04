import { Box, Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import { assets } from "../assets/assets_frontend/assets";


const Footer = () => {

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{marginTop:"20px",marginBottom:"20px"}}> 
          <Grid item xs={12} sm={6} md={7}  >
            <IconButton sx={{marginBottom:"20px"}}>
                <img src={assets.logo} alt="" style={{width:"150px"}}/>
            </IconButton>
            <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{marginBottom:"20px"}}>
              Customer Service
            </Typography>
            <Typography gutterBottom>
              Home
            </Typography>
            <Typography gutterBottom>
              About us
            </Typography>
            <Typography gutterBottom>
              Delivery
            </Typography>
            <Typography gutterBottom>
              Privacy policy
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{marginBottom:"20px"}}>
              Contact Us
            </Typography>
            <Typography>
                +1 (555) 123-4567
            </Typography>
            <Typography>
                support@example.com
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box sx={{textAlign: "center" ,margin:"20px 0px"}}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;