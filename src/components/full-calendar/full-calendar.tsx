import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listWeek from "@fullcalendar/list";
import { Box } from "@mui/material";
import { getRandomColor } from "../utils/colors";
import { formatDate } from "../../bookings/utils/date-ulitilies";
import { Booking } from "../../bookings/domain/booking";
import { Appointment } from "../../diary/domain/appointment";

interface ScheduleProps {
  initialDate: Date;
  currentView: string;
  calendarRef: any;
  events: any[];
  setAppointment: (appointment: Appointment) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({
  initialDate,
  currentView,
  calendarRef,
  events,
  setAppointment,
}) => {
  const eventsData = events.map((event) => {
    const { debtor, reason, start_time, duration, cancelled } = event;
    let title = "No patient";
    let debtorInfo = debtor?.debtor || {};

    if (debtor && debtor.patients && debtor.selected_patient_id !== undefined) {
      const patient =
        debtor.patients.find(
          (p: any) => p.patient_dbid === debtor.selected_patient_id
        ) || debtorInfo;
      title = `${patient.patient_name || debtorInfo.debtor_name} ${
        patient.patient_surname || debtorInfo.debtor_surname
      }`;
    }

    const start = start_time;
    const end = new Date(
      new Date(start_time).getTime() + duration * 60000
    ).toISOString();

    const eventDefaults = {
      color: "#f700ff99!important", // Ensure the color is valid CSS color.
      textColor: "#fff",
      backgroundColor: getRandomColor(),
      borderColor: "#fff",
    };

    return {
      title,
      start,
      end,
      description: reason,
      extendedProps: {
        booking_status: cancelled ? "Cancelled" : "Active",
        booking_type: debtorInfo.debtor_type || "None",
        ...event, // Spread the entire event object.
      },
      ...eventDefaults,
    };
  });

  useEffect(() => {
    if (calendarRef.current && initialDate) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(formatDate(initialDate));
    }
  }, [initialDate, calendarRef]);

  return (
    <Box
      sx={{
        "--fc-today-bg-color": "#0095ff10",
        "--fc-border-color": "#efefef",
        "--fc-event-selected-overlay-color": "rgb(0 105 183 / 30%)",
      }}
    >
      <FullCalendar
        initialDate={formatDate(initialDate)}
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listWeek, interactionPlugin]}
        initialView={currentView}
        headerToolbar={false}
        height={"75vh"}
        events={eventsData}
        eventClick={(clickInfo) =>
          setAppointment(clickInfo.event.extendedProps as Appointment)
        }
        themeSystem="bootstrap"
        selectable
      />
    </Box>
  );
};

export default Schedule;
