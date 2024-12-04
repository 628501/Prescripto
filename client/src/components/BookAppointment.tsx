import { Avatar, AvatarGroup, Box, Button, Typography } from "@mui/material";
import { assets } from "../assets/assets_frontend/assets";

const BookAppointment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: "#5F6FFF",
        marginTop: "100px",
        paddingX: "100px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          columnGap: "10px",
          width: "600px",
          height: "600px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "left",
            marginBottom: "30px",
            fontSize:"50px",
            fontWeight: "500",
          }}   
        >
          Book Appointment
          <br />
            With Trusted Doctors
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AvatarGroup spacing="small">
              <Avatar  alt="Remy Sharp" src={assets.Avtr1} />
              <Avatar alt="Travis Howard" src={assets.Avtr2} />
              <Avatar alt="Cindy Baker" src={assets.Avtr3} />
            </AvatarGroup>

            <Typography
              sx={{
                color: "white",
                marginLeft: "10px",
                fontSize: "14px",
                lineHeight: "20px",
                width: "450px",
              }}
            >
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                color: "black",
                background: "white",
                padding: "10px 30px",
                fontSize:"12px",
                borderRadius: "30px",
                transition: "ease 0.4s",
                textTransform:"none",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              Book Appointment
              <img
                style={{ marginLeft: "10px" }}
                src="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206H15M15%206L10.8378%201M15%206L10.8378%2011'%20stroke='%23595959'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                alt=""
              />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <img
          src={assets.header_img}
          alt=""
          style={{
            position: "absolute",
            bottom: "0",
            right: "100px",
            width: "700px",
          }}
        />
      </Box>
    </Box>
  );
};

export default BookAppointment;
