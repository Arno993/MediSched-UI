import React from "react";
import styled from "styled-components";
import { formatDateExcludingDay } from "../bookings/utils/date-ulitilies";
import StyledButton from "./form/button";

export enum ViewType {
  Day = "timeGridDay",
  Week = "timeGridWeek",
  Month = "dayGridMonth",
  List = "listWeek",
}

type NavbarProps = {
  selectedDate: Date;
  view: ViewType;
  setView: (view: ViewType) => void;
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem 1rem;
  width: calc(100% - 120px);
  height: 40px;
  margin-left: 80px;
  position: fixed;
  padding: 10px 18px 10px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  top: 0;
`;

const DateDisplay = styled.div`
  background-color: #f8f8f8;
  color: #333;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.25rem;
`;

const ViewButtons = styled.div`
  display: flex;
`;

const Navbar: React.FC<NavbarProps> = ({ selectedDate, view, setView }) => {
  return (
    <NavbarContainer>
      <DateDisplay>{formatDateExcludingDay(selectedDate)}</DateDisplay>
      <ViewButtons>
        <StyledButton
          id={"view-button"}
          isActive={view === ViewType.Month}
          onClick={() => setView(ViewType.Month)}
        >
          Month
        </StyledButton>
        <StyledButton
          id={"view-button"}
          isActive={view === ViewType.Week}
          onClick={() => setView(ViewType.Week)}
        >
          Week
        </StyledButton>
        <StyledButton
          id={"view-button"}
          isActive={view === ViewType.Day}
          onClick={() => setView(ViewType.Day)}
        >
          Day
        </StyledButton>
        <StyledButton
          id={"view-button"}
          isActive={view === ViewType.List}
          onClick={() => setView(ViewType.List)}
        >
          List
        </StyledButton>
      </ViewButtons>
    </NavbarContainer>
  );
};

export default Navbar;
