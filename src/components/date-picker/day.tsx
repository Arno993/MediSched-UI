import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";

// Define the styled component with the styles you want to apply
const CustomDateCalendar = styled(DateCalendar)`
  /* position: relative;
  top: 80px;
  left: 0px; */

  /* Hide the header with the month and year */
  .MuiPickersCalendarHeader-root,
  .MuiCalendarPicker-root {
    display: none;
  }

  /* Style for the individual day cells */
  .MuiPickersDay-day {
    width: 48px; // Set the width of the day cells
    height: 48px; // Set the height of the day cells
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem; // Increase the font size of the dates
    margin: 4px; // Add some space around each day cell
    border-radius: 50%; // Make the day cells round
  }

  /* Style for the selected day */
  .MuiPickersDay-daySelected {
    background-color: #6200ea; // Set the background color for the selected day
    color: #ffffff; // Set the text color for the selected day
  }

  /* Hover effect for the day cells */
  .MuiButtonBase-root:hover {
    background-color: #eeeeee; // Color for hover effect
  }

  /* Style for the current day */
  .MuiPickersDay-today {
    border: 1px solid #6200ea; // Set a border for the current day
  }
`;

export default function DayPicker() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <CustomDateCalendar
      views={["day"]}
      value={date}
      onChange={(newDate) => setDate(newDate)}
      sx={{
        head_cell: {
          width: "60px",
        },
        table: {
          maxWidth: "none",
        },
        day: {
          margin: "auto",
        },
      }}
    />
  );
}
