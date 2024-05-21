import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";

const CustomDateCalendar = styled(DateCalendar)`
  .MuiPickersCalendarHeader-root,
  .MuiCalendarPicker-root {
    display: none;
  }

  .MuiPickersDay-day {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin: 4px;
    border-radius: 50%;
  }

  .MuiPickersDay-daySelected {
    background-color: #6200ea;
    color: #ffffff;
  }

  .MuiButtonBase-root:hover {
    background-color: #eeeeee;
  }

  .MuiPickersDay-today {
    border: 1px solid #6200ea;
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
