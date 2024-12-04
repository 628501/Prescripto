import React from 'react';
import { doctors } from '../assets/assets_frontend/assets';  // Assuming doctors data exists here
import DoctorCard from './DoctorCard';
import { Container, Typography, Box, Button } from '@mui/material';

const BookDoctor: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: '500', marginBottom: '40px' }}>
        Top Doctors to Book
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
      >
        {/* Map over doctors array and pass each doctor to DoctorCard */}
        {doctors.slice(0, 10).map((doctor) => (
          <Box key={doctor._id} sx={{ width: '220px' }}>  {/* Set the width of each item */}
            <DoctorCard doctor={doctor} />  {/* Pass doctor data as props */}
          </Box>
        ))}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
         <Button variant='outlined' sx={{marginY:"30px" , padding:"10px 40px" , borderRadius:"25px" , color:"#5F6FFF" , borderColor:"#5F6FFF"}}>More</Button>
      </Box>
    </Container>
  );
};

export default BookDoctor;
