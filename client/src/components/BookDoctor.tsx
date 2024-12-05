import React from 'react';
import { doctors } from '../assets/assets_frontend/assets';
import DoctorCard from './DoctorCard';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        {doctors.slice(0, 10).map((doctor) => (
          <Box key={doctor._id} sx={{ width: '220px' }}>
            <DoctorCard doctor={doctor} />
          </Box>
        ))}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
         <Link to="/all-doctors">
         <Button variant='outlined' sx={{marginY:"30px" , padding:"10px 40px" , borderRadius:"25px" , color:"#5F6FFF" , borderColor:"#5F6FFF"}}>More</Button>
         </Link>
      </Box>
    </Container>
  );
};

export default BookDoctor;
