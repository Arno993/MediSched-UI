import React, { useRef, useState, useEffect } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";
import { Sidebar } from "./components/sidebar";
import { BottomBar } from "./components/bottom-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DayPicker from "./components/date-picker/day";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Navbar, { ViewType } from "./components/navbar";
import Schedule from "./components/full-calendar/full-calendar";
import FullCalendar from "@fullcalendar/react";
import Login from "./accounts/views/login";
import { getBooking } from "./bookings/actions/get-booking";
import { Booking } from "./bookings/domain/booking";
import { calculateDatesForView } from "./bookings/utils/date-ulitilies";
import AppointmentDetails from "./components/appointment/appointment-details";
import { Appointment } from "./diary/domain/appointment";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
  padding-top: 73px;
  background-color: #e8e6e66e;
  position: relative;
  gap: 20px;
`;

const ContentBox = styled.div`
  background: #ffffff;
  padding: 15px;
  height: calc(100vh - 175px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<ViewType>(ViewType.Month);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const calendarRef = useRef<FullCalendar>();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [appointment, setAppointment] = useState<Appointment>();

  useEffect(() => {
    const checkAuth = () => {
      const uid = Cookies.get("uid");
      setIsAuthenticated(!!uid);
    };

    checkAuth();

    const interval = setInterval(checkAuth, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const { startDate, endDate } = calculateDatesForView(selectedDate, view);
      const diary_uid = 1;

      getBooking(diary_uid, startDate, endDate, view)
        .then((response) => {
          if (response.status === "OK") {
            setBookings(response.data);
          } else {
            console.error("Failed to fetch bookings");
          }
        })
        .catch((error) => console.error("Fetching bookings failed:", error));
    }
  }, [isAuthenticated, view, selectedDate]);

  const changeView = (newView: ViewType) => {
    if (calendarRef.current) {
      const api = calendarRef.current.getApi();
      api.changeView(newView);
      setView(newView);
    }
  };

  const handleYearChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const handleMonthChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {isAuthenticated ? (
          <>
            <Navbar
              selectedDate={selectedDate}
              view={view}
              setView={changeView}
            />
            <AppContainer>
              <Sidebar />
              <Content>
                <ContentBox style={{ flex: 8 }}>
                  <Schedule
                    initialDate={selectedDate}
                    calendarRef={calendarRef}
                    currentView={view}
                    events={bookings}
                    setAppointment={setAppointment}
                  />
                </ContentBox>
                <ContentBox
                  style={{
                    flex: 2,
                    // background: "#f5f5f5",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* <DayPicker /> */}
                  {appointment && (
                    <AppointmentDetails appointment={appointment} />
                  )}
                </ContentBox>
              </Content>
              <BottomBar
                date={selectedDate}
                onYearChange={handleYearChange}
                onMonthChange={handleMonthChange}
              />
            </AppContainer>
          </>
        ) : (
          <Login />
        )}
      </LocalizationProvider>
    </Router>
  );
};

export default App;
