import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./basicTabs.scss";
import styles from "./basicTabs.module.scss";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { calendarIcon, searchIcon, clockIcon, tourIcon, carIcon, People } from "../../assets/icons";
import FilterCard from "../filterCards/filterCard";


const filterData = [
  {
    icon: People, // Replace with your actual icon component
    title: "Number of People",
    value: "Choose Number", // This should be a state variable
    onChange: "handlePeopleChange", // This should be a function that updates the state
  },
  {
    icon: calendarIcon, // Replace with your actual icon component
    title: "Date",
    value: "Choose Date", // This should be a state variable
    onChange: "handleEventDateChange", // This should be a function that updates the state
  },
  {
    icon: clockIcon, // Replace with your actual icon component
    title: "Time",
    value: "Choose Time", // This should be a state variable
    onChange: "handleLocationChange", // This should be a function that updates the state
  },
  {
    icon: tourIcon, // Replace with your actual icon component
    title: "Tour",
    value: "Select Tour", // This should be a state variable
    onChange: "handleFavoritesChange", // This should be a function that updates the state
  },
  {
    icon: carIcon, // Replace with your actual icon component
    title: "Transportation",
    value: "Select Transportation", // This should be a state variable
    onChange: "handleFavoritesChange", // This should be a function that updates the state
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          aria-label="basic tabs example"
        >
          <Tab label="Public Tool" {...a11yProps(0)} />
          <Tab label="Private Tool" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div
          className={`${styles.customTabPanel} d-flex justify-between align-items-center gap-5 w-100`}
        >
          <div className={`${styles.d} d-flex flex-item`}>
            {filterData.map((item, index) => (
              <FilterCard
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                onChange={item.onChange}
              />
            ))}
          </div>
          <div
            className={`${styles.searchIcon} d-flex justify-center align-items-center align-self-end`}
          >
            {searchIcon}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Private Tool
      </CustomTabPanel>
    </Box>
  );
}
