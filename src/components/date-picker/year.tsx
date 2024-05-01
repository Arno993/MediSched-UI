import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

interface YearPickerProps {
  date: Date; // Current date
  onChange: (newDate: Date) => void; // Callback to handle the year change
}

const YearPicker: React.FC<YearPickerProps> = ({ date, onChange }) => {
  const handleYearChange = (offset: number) => {
    const currentYear = date.getFullYear();
    const newYear = currentYear + offset;
    const newDate = new Date(date.setFullYear(newYear));

    console.log("Current year:", currentYear, "New year:", newYear);

    onChange(newDate);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 2, marginLeft: "13px" }}
    >
      <IconButton onClick={() => handleYearChange(-1)}>
        <ArrowBackIosNew />
      </IconButton>
      <Typography variant="h6" component="span">
        {date.getFullYear()}
      </Typography>
      <IconButton onClick={() => handleYearChange(1)}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default YearPicker;
