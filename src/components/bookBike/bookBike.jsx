import bikePic from "../../assets/services/bike picture.png";
import styles from "./bookBike.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";

const services = [
  { value: "bike_rental", label: "Bike Rental" },
  { value: "car_rental", label: "Car Rental" },
  { value: "taxi", label: "Taxi Service" },
  { value: "scooter", label: "Scooter Rental" },
];

const BookBike = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: null,
    time: null,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    // Implement your form submission logic here
  };
  return (
    <section id={styles.bookBike}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.bookBike} d-flex justify-between`}>
          <div
            className={`${styles.left} d-flex justify-center align-items-center`}
          >
            <div className={`${styles.contactUsCard}`}>
              <h3>Book Now Bike</h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex",justifyContent:"space-between",gap:"1rem" }}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      required
                    />
                  </Box>

                  <Box sx={{ display: "flex",justifyContent:"space-between",gap:"1rem" }}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      required
                    />
                    <FormControl variant="outlined" margin="normal" fullWidth>
                      <InputLabel id="service-type-label">
                        Service Type
                      </InputLabel>
                      <Select
                        labelId="service-type-label"
                        id="service-type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        label="Service Type"
                        required
                      >
                        {services.map((service) => (
                          <MenuItem key={service.value} value={service.value}>
                            {service.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ display: "flex",justifyContent:"space-between",gap:"1rem" }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label"></InputLabel>
                      <div components={["DatePicker"]}>
                        <DatePicker />
                      </div>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label"></InputLabel>
                      <div components={["TimePicker"]}>
                        <TimePicker />
                      </div>
                    </FormControl>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // fullWidth
                  >
                    Book Now
                  </Button>
                </form>
              </LocalizationProvider>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <img src={bikePic} alt="image not found" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookBike;
