import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

interface DoctorProps {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: {
    line1: string;
    line2: string;
  };
}

interface DocProps {
  doctor: DoctorProps;
}

const DoctorCard: React.FC<DocProps> = ({ doctor }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: '10px',
        boxShadow: 'none',
        border: '1px solid #C9D8FF',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      }}
    >
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          height="230"
          image={doctor.image}  // Use doctor image here
          alt={doctor.name}  // Use doctor name for alt text
          sx={{ background: '#EAEFFF' }}
        />
        <CardContent>
          <Box>
            <Typography component="div">
            <ul
                style={{
                padding: '0px 0px 0px 20px',
                margin: '0',
                color: '#3AC65E',
                }}
            >
                <li>Available</li>
            </ul>
            </Typography>
          </Box>
          <Typography gutterBottom variant="h6" sx={{fontSize:"14px"}}  component="div">
            {doctor.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {doctor.speciality}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DoctorCard;
