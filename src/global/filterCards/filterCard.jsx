import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./filterCard.module.scss"; // Ensure you have the corresponding CSS module file

// import { styled } from "@mui/material/styles";
// import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// const ProSpan = styled("span")({
//   display: "inline-block",
//   height: "1em",
//   width: "1em",
//   verticalAlign: "middle",
//   marginLeft: "0.3em",
//   marginBottom: "0.08em",
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: "url(https://mui.com/static/x/pro.svg)",
// });

// function Label({ componentName, valueType, isProOnly }) {
//   const content = (
//     <span>
//       <strong>{componentName}</strong> for {valueType} editing
//     </span>
//   );

//   if (isProOnly) {
//     return (
//       <Stack direction="row" spacing={0.5} component="span">
//         <Tooltip title="Included on Pro package">
//           <a
//             href="https://mui.com/x/introduction/licensing/#pro-plan"
//             aria-label="Included on Pro package"
//           >
//             <ProSpan />
//           </a>
//         </Tooltip>
//         {content}
//       </Stack>
//     );
//   }

//   return content;
// }

const FilterCard = ({ icon, title, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={`${styles.filterCard} flex-item`}>
        <div className={`${styles.fc_upper} d-flex flex-column`}>
          <div className="d-flex gap-2">
            {icon}
            <h5>{title}</h5>
          </div>

          {title &&
            (title === "Number of People" ||
              title === "Tour" ||
              title === "Transportation") && (
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Choose Number
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={value}
                  label="Age"
                  onChange={onChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            )}

          {title && title === "Date" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label"></InputLabel>
              <div components={["DatePicker"]}>
                <DatePicker />
              </div>
            </FormControl>
          )}

          {title && title === "Time" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label"></InputLabel>
              <div components={["TimePicker"]}>
                <TimePicker />
              </div>
            </FormControl>
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FilterCard;
