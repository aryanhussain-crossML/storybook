import bikePic from "../../assets/services/bike picture.png";
import styles from "./bookBike.module.scss";
import "./bookBike.scss";
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
        <div className={`${styles.bookBike} bookBike d-flex justify-between`}>
          <div
            className={`${styles.left} d-flex justify-center align-items-center`}
          >
            <div className={`${styles.contactUsCard}`}>
              <h3>Book Now Bike</h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit}>
                  <Box
                    className={`${styles.flexCol}`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "2rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="select-name"
                      >
                        Name
                      </InputLabel>
                      <TextField
                        sx={{
                          background: "#fff",
                          borderRadius: "5px",
                        }}
                        label="Name"
                        labelId="select-name"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="select-email"
                      >
                        Email Address
                      </InputLabel>
                      <TextField
                        sx={{
                          background: "#fff",
                          borderRadius: "5px",
                        }}
                        label="Email "
                        labelId="select-email"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                      />
                    </div>
                  </Box>

                  <Box
                    className={`${styles.flexCol}`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "2rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="phoneNumber"
                      >
                        Phone Number
                      </InputLabel>
                      <TextField
                        sx={{
                          background: "#fff",
                          borderRadius: "5px",
                        }}
                        label="Phone Number"
                        labelId="phoneNumber"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                      />
                    </div>

                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="service-type-label"
                      >
                        Service Type
                      </InputLabel>
                      <Select
                        labelId="service-type-label"
                        id="service-type"
                        name="serviceType"
                        // margin="normal"
                        sx={{
                          margin: "0.5rem 0",
                          background: "#fff",
                        }}
                        value={formData.serviceType}
                        onChange={handleChange}
                        label="Service Type"
                        variant="outlined"
                        fullWidth
                        required
                      >
                        {services.map((service) => (
                          <MenuItem key={service.value} value={service.value}>
                            {service.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </Box>

                  <Box
                    className={`${styles.flexCol}`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "2rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="demo-select-small-label"
                      >
                        Date
                      </InputLabel>
                      <FormControl
                        sx={{
                          margin: "0.5rem 0",
                          minWidth: 120,
                          width: "100%",
                        }}
                        size="small"
                      >
                        <div components={["DatePicker"]}>
                          <DatePicker
                            sx={{
                              background: "#fff",
                              borderRadius: "5px",
                              width: "100%",
                            }}
                          />
                        </div>
                      </FormControl>
                    </div>

                    <div className="filedWrapper w-100">
                      <InputLabel
                        sx={{ textAlign: "left", fontWeight: "600" }}
                        id="demo-select-small-label"
                      >
                        Time
                      </InputLabel>
                      <FormControl
                        sx={{
                          margin: "0.5rem 0",
                          minWidth: 120,
                          width: "100%",
                        }}
                        size="small"
                      >
                        <div components={["TimePicker"]}>
                          <TimePicker
                            sx={{
                              background: "#fff",
                              borderRadius: "5px",
                              width: "100%",
                            }}
                          />
                        </div>
                      </FormControl>
                    </div>
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
