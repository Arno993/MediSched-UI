import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { Sidebar } from "./components/sidebar";
import { BottomBar } from "./components/bottom-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DayPicker from "./components/form/date-picker/day";
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
import LoadingScreen from "./shared/loading-overlay";
import { AppointmentModal } from "./components/appointment/modals/appointment-modal";
import { FloatingButton } from "./components/add-button";
import { AppContainer, Content, ContentBox } from "./app-styles";
import { UserProvider, useUser } from "./contexts/user-context";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<ViewType>(ViewType.Month);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const calendarRef = useRef<FullCalendar>();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [appointment, setAppointment] = useState<Appointment>();
  const [showModal, setShowModal] = useState(false);
  const { isLoading } = useUser();

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
  }, [isAuthenticated, view, selectedDate, appointment]);

  const changeView = (newView: ViewType) => {
    if (calendarRef.current) {
      const api = calendarRef.current.getApi();
      api.changeView(newView);
      setView(newView);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleYearChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const handleMonthChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const resetAppointment = () => {
    setAppointment(undefined);
  };

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {isLoading && <LoadingScreen />}
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
                {appointment && (
                  <ContentBox
                    style={{
                      flex: 2,
                      backgroundColor: "#ffffff",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <AppointmentDetails
                      appointment={appointment}
                      onEdit={handleToggleModal}
                    />
                  </ContentBox>
                )}
              </Content>
              <FloatingButton
                onClick={() => {
                  resetAppointment();
                  handleToggleModal();
                }}
              >
                +
              </FloatingButton>
              <BottomBar
                date={selectedDate}
                onYearChange={handleYearChange}
                onMonthChange={handleMonthChange}
              />
              {showModal && (
                <AppointmentModal
                  onClose={() => setShowModal(false)}
                  appointment={appointment}
                />
              )}
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
