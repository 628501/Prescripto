import {
  Box,
  IconButton,
  Avatar,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useState } from "react";

const AddDoctor = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      speciality: "",
      experience: "",
    },
  });

  const [url, setUrl] = useState<string | undefined>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUrl(imageURL);
    }
  };

  const onSubmit = (data: FieldValues) => {
    reset();
    setUrl("");
    console.log("Form Data:", data);
    
  };

  return (
    <Box
      sx={{
        padding: "50px",
        width: "55%",
        height: "80%",
        overflowY: "auto",
        border: "1px solid lightgray",
        borderRadius: "4px",
      }}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Typography variant="h5">Add Doctor</Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="file-input">
          <IconButton
            component="span"
            disableRipple
            disableTouchRipple
            disableFocusRipple
            sx={{
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 60,
                height: 60,
              }}
              src={url || ""}
            >
              {!url && <AccountCircleIcon />}
            </Avatar>
          </IconButton>
        </label>
        <Typography
          variant="body1"
          sx={{ marginLeft: "20px", marginTop: "2px" }}
        >
          Upload doctor
          <Typography
            variant="body2"
            component="span"
            sx={{ display: "block" }}
          >
            picture
          </Typography>
        </Typography>
      </Box>

      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 45%" }}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
                error={!!errors.name}
                helperText={errors.name ? "Name is required" : ""}
              />
            )}
            rules={{ required: true }}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Doctor Email"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
                error={!!errors.email}
                helperText={errors.email ? "Email is required" : ""}
              />
            )}
            rules={{ required: true }}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Set Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
                error={!!errors.password}
                helperText={errors.password ? "Password is required" : ""}
              />
            )}
            rules={{ required: true }}
          />

          <FormControl fullWidth sx={{ marginBottom: "20px", width: "95%" }}>
            <InputLabel>Experience</InputLabel>
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <Select label="Experience" {...field}>
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (year) => (
                      <MenuItem key={year} value={year}>
                        {year} {year === 1 ? "year" : "years"}
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
            />
          </FormControl>

          <Controller
            name="fees"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Fees"
                variant="outlined"
                fullWidth
                type="number"
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
              />
            )}
          />

          <Controller
            name="aboutDoctor"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Write about doctor"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ marginBottom: "10px", width: "200%" }}
                {...field}
              />
            )}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 45%" }}>
          <FormControl fullWidth sx={{ marginBottom: "20px", width: "95%" }}>
            <InputLabel>Speciality</InputLabel>
            <Controller
              name="speciality"
              control={control}
              render={({ field }) => (
                <Select label="Speciality" {...field}>
                  <MenuItem value="general-physician">
                    General Physician
                  </MenuItem>
                  <MenuItem value="gynecologist">Gynecologist</MenuItem>
                  <MenuItem value="dermatologist">Dermatologist</MenuItem>
                  <MenuItem value="pediatricians">Pediatricians</MenuItem>
                  <MenuItem value="neurologist">Neurologist</MenuItem>
                  <MenuItem value="gastroenterologist">
                    Gastroenterologist
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <Controller
            name="degree"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Degree"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "20px", width: "95%" }}
                {...field}
              />
            )}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5F6FFF",
            borderRadius: "20px",
            padding: "10px",
            textTransform: "none",
            color: "white",
            width: "150px",
            "&:hover": {
              backgroundColor: "#4E57D1",
            },
          }}
          onClick={handleSubmit(onSubmit)}
        >
          Add Doctor
        </Button>
      </Box>
    </Box>
  );
};

export default AddDoctor;
