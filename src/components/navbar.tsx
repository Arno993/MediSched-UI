import React from "react";
import { formatDynamicDate } from "../bookings/utils/date-ulitilies";
import { format } from "date-fns";
import StyledButton from "./form/button";
import {
  NavbarContainer,
  DateDisplay,
  ViewButtons,
} from "./styles/styled-navbar";

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

const Navbar: React.FC<NavbarProps> = ({ selectedDate, view, setView }) => {
  return (
    <NavbarContainer>
      <DateDisplay>
        <span>{format(selectedDate, "MMM")}</span>
        <span>{format(selectedDate, "yyyy")}</span>
      </DateDisplay>
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
