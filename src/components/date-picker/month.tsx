import React from "react";
import { MonthCalendar } from "@mui/x-date-pickers/MonthCalendar";
import { colors } from "../../shared/global-styles/color";

interface MonthPickerProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

const MonthPicker: React.FC<MonthPickerProps> = ({ date, onChange }) => {
  const handleMonthChange = (newDate: Date | null) => {
    if (newDate) {
      const updatedDate = new Date(date);
      updatedDate.setMonth(newDate.getMonth());
      onChange(updatedDate);
    }
  };

  return (
    <MonthCalendar
      value={date}
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        position: "relative",
        right: "15px",
        fontSize: "12px",
        justifyContent: "space-between",
        ".MuiPickersMonth-root": {
          flex: "none",
          margin: "auto",
        },
        ".Mui-selected": {
          backgroundColor: `${colors.darkNavy} !important`,
        },
      }}
      onChange={(newDate) => handleMonthChange(newDate)}
    />
  );
};

export default MonthPicker;
