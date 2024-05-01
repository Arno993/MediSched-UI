import React, { useState } from "react";
import { Appointment } from "../domain/appointment";
import "./diary.css";
const Diary: React.FC = () => {
  // const [appointments, setAppointments] = useState<Appointment[]>([]);
  // const [newAppointment, setNewAppointment] = useState<Appointment>({
  //   id: 0,
  //   time: "",
  //   patientName: "",
  //   description: "",
  // });
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setNewAppointment((prevAppointment) => ({
  //     ...prevAppointment,
  //     [name]: value,
  //   }));
  // };
  // const handleAddAppointment = () => {
  //   setAppointments((prevAppointments) => [
  //     ...prevAppointments,
  //     newAppointment,
  //   ]);
  //   setNewAppointment({
  //     id: newAppointment.id + 1,
  //     time: "",
  //     patientName: "",
  //     description: "",
  //   });
  // };
  // const handleRemoveAppointment = (id: number) => {
  //   setAppointments((prevAppointments) =>
  //     prevAppointments.filter((appointment) => appointment.id !== id)
  //   );
  // };
  return <></>;
  // return (
  //   <div className="diary-container">
  //     <h2 className="diary-title">Diary</h2>
  //     <div className="input-section">
  //       <input
  //         type="text"
  //         className="input-field"
  //         placeholder="Time"
  //         name="time"
  //         value={newAppointment.time}
  //         onChange={handleInputChange}
  //       />
  //       <input
  //         type="text"
  //         className="input-field"
  //         placeholder="Patient Name"
  //         name="patientName"
  //         value={newAppointment.patientName}
  //         onChange={handleInputChange}
  //       />
  //       <textarea
  //         className="input-field"
  //         placeholder="Description"
  //         name="description"
  //         value={newAppointment.description}
  //         onChange={handleInputChange}
  //       />
  //       <button className="add-button" onClick={handleAddAppointment}>
  //         Add Appointment
  //       </button>
  //     </div>
  //     <ul className="appointment-list">
  //       {appointments.map((appointment) => (
  //         <li key={appointment.id} className="appointment-item">
  //           <div className="appointment-details">
  //             <span className="time">{appointment.time}</span>
  //             <span className="patient-name">{appointment.patientName}</span>
  //             <button
  //               className="remove-button"
  //               onClick={() => handleRemoveAppointment(appointment.id)}
  //             >
  //               Remove
  //             </button>
  //           </div>
  //           <div className="description">{appointment.description}</div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

// export default Diary;
