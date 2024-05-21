import React from "react";
import styled from "styled-components";
import Month from "./form/date-picker/month";
import Year from "./form/date-picker/year";
import { colors } from "../shared/global-styles/color";

type DateChangeHandler = (newDate: Date) => void;

interface BottomBarProps {
  date: Date;
  onYearChange: DateChangeHandler;
  onMonthChange: DateChangeHandler;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  date,
  onYearChange,
  onMonthChange,
}) => {
  return (
    <BottomBarContainer>
      <Year date={date} onChange={onYearChange} />
      <Month date={date} onChange={onMonthChange} />
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  width: calc(100% - 81px);
  height: 50px;
  margin-left: 81px;
  position: fixed;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  bottom: 0;

  .css-2ulfj5-MuiTypography-root {
    color: ${colors.darkNavy};
  }
  .MuiSvgIcon-root {
    width: 15px;
    height: 15px;
  }
`;
