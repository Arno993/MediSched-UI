import React from "react";

// If the Appointment interface is not defined in this file, you should define it or import it if it's in a separate file
interface Appointment {
  id: number;
  time: string;
  patientName: string;
  description: string;
}

// Define the interface for the Calendar props
interface CalendarProps {
  appointments: Appointment[];
}

const Calendar: React.FC<CalendarProps> = ({ appointments }) => {
  console.log(appointments);

  return (
    <div className="calendar">
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.time} - {appointment.patientName}:{" "}
            {appointment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
