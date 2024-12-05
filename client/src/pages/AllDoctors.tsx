import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DoctorsFilter } from "../Services/doctorService";
import { useState, useEffect } from "react";
import { doctors } from "../assets/assets_frontend/assets";

const AllDoctors = () => {
  const doctorSpecialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const navigate = useNavigate();
  const [filteredDocs, setFilteredDocs] = useState<any>([]);
  const [update, setUpdate] = useState<string>("");

  const handleNavigation = (specialty: string) => {
    if (update === specialty) {
      setUpdate("");
      setFilteredDocs(doctors);
      navigate("/doctor");
    } else {
      setUpdate(specialty);
      const filteredDocs = DoctorsFilter(specialty);
      setFilteredDocs(filteredDocs);
      navigate(`/doctor/${specialty}`);
    }
  };

  useEffect(() => {
    setFilteredDocs(doctors);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
      <Box>
        <Typography variant="body1" sx={{ ml: "0.8rem" }}>
          Browse through the doctors' specialties.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", p: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", rowGap: "15px", mt: "0.5rem" }}>
          {doctorSpecialties.map((specialty, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleNavigation(specialty)}
              sx={{
                borderColor: "lightgray",
                textTransform: "none",
                color: update === specialty ? "black" : "#4B5563",
                minWidth: "200px",
                justifyContent: "flex-start",
                backgroundColor: update === specialty ? "#EAEFFF" : "",
                textAlign: "left",
                paddingLeft: "16px",
              }}
            >
              <Typography variant="body2">{specialty}</Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "20px", mt: "0.5rem" }}>
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc: Record<string, string>, index: number) => (
              <Box key={index}>
                <Card
                  sx={{
                    maxWidth: 250,
                    borderRadius: "10px",
                    boxShadow: "none",
                    border: "1px solid #C9D8FF",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardActionArea disableRipple>
                    <CardMedia
                      component="img"
                      height="230"
                      image={doc.image}
                      alt={doc.name}
                      sx={{ background: "#EAEFFF" }}
                    />
                    <CardContent>
                      <Box>
                        <Typography component="div">
                          <ul
                            style={{
                              padding: "0px 0px 0px 20px",
                              margin: "0",
                              color: "#3AC65E",
                            }}
                          >
                            <li>Available</li>
                          </ul>
                        </Typography>
                      </Box>
                      <Typography gutterBottom variant="h6" sx={{ fontSize: "14px" }} component="div">
                        {doc.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {doc.speciality}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: "gray" }}>
              No doctors found for the selected specialty.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default AllDoctors;
