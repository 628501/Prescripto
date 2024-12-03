import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid, Checkbox, FormControlLabel } from "@mui/material";

interface DoctorsCardProps {
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

interface Doc {
  doctors: DoctorsCardProps[];
}

export default function DoctorCard({ doctors }: Doc) {
  return (
    <Grid container spacing={3}>
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={doctor._id}>
          <Card
            sx={{
              maxWidth: 250,
              boxShadow: "0px 0px 0px 1px #C9D8FF",
              borderRadius: "10px"
            }}
          >
            <CardActionArea disableTouchRipple disableRipple >
              <CardMedia
                component="img"
                height="200"
                image={doctor.image}
                alt={doctor.name}
                sx={{
                  background: "#F2F3FF",
                  transition: "background 0.4s ease",
                  "&:hover": {
                    background: "#5F6FFF",
                  },
                }}
              />
              <CardContent >
                <Typography sx={{fontSize:"14" , fontWeight:"600"}} component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {doctor.speciality}
                </Typography>
                <FormControlLabel
                  control={<Checkbox checked={true} />}
                  label="Available"
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}