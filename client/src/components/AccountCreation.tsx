import { Box, Button, Typography } from "@mui/material";
import { assets } from "../assets/assets_frontend/assets";

const AccountCreation = () => {
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
          height: "400px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "left",
            marginBottom: "30px",
            fontSize: "45px",
            fontWeight: "500",
          }}
        >
          Book Appointment
          <br />
          With 100+ Trusted Doctors
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
          ></Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "black",
                background: "white",
                padding: "10px 30px",
                fontSize: "15px",
                borderRadius: "30px",
                transition: "ease 0.4s",
                textTransform: "none",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <img
          src={assets.appointment_img}
          alt=""
          style={{
            position: "absolute",
            bottom: "0",
            right: "100px",
            width: "400px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AccountCreation;
