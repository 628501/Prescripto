import { Box, Button, Container, Typography } from "@mui/material";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <Box>
      <Container>
        <Box sx={{ marginTop: "130px" }}>
          <Typography
            variant="h5"
            sx={{ color: "#707070", textAlign: "center" }}
          >
            CONTACT{" "}
            <span style={{ color: "#374151", fontWeight: "500" }}>US</span>
          </Typography>
          <Box
            sx={{
              mt: "2rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "3rem",
              justifyContent: "center",
            }}
          >
            <Box>
              <img
                src={assets.contact_image}
                alt=""
                style={{ width: "400px" }}
              />
            </Box>
            <Box
              sx={{
                width: "400px",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                rowGap: "2rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "500", color: "#4B5563" }}
              >
                OUR OFFICE
              </Typography>
              <Typography variant="body2" sx={{ color: "#707070" }}>
                00000 Willms Station <br />
                Suite 000, Washington, USA
              </Typography>
              <Typography variant="body2" sx={{ color: "#707070" }}>
                Tel: (000) 000-0000 <br />
                Email: greatstackdev@gmail.com
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "500", color: "#4B5563" }}
              >
                CAREERS AT PRESCRIPTO
              </Typography>
              <Typography variant="body2" sx={{ color: "#707070" }}>
                Learn more about our teams and job openings.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  width: "160px",
                  p: "1rem",
                  color: "black",
                  borderColor: "black",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
              >
                Explore Jobs
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
