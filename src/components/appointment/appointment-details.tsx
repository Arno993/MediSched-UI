import React, { useState } from "react";
import styled from "styled-components";
import { Appointment } from "../../diary/domain/appointment";
import {
  StyledIcon,
  DetailsContainer,
  DetailRow,
  Label,
  Value,
} from "./styled-appointment-details";

interface AppointmentDetailsProps {
  appointment: Appointment;
  onEdit: () => void;
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({
  appointment,
  onEdit,
}) => {
  if (!appointment) {
    return (
      <DetailsContainer>
        Select an appointment to view details.
      </DetailsContainer>
    );
  }

  const hasDebtor = !!(appointment && appointment.debtor);

  return (
    <DetailsContainer>
      <StyledIcon />
      <DetailRow>
        <Label>Name:</Label>
        <Value>
          {(hasDebtor && appointment.debtor.debtor.debtor_name) || "N/A"}
        </Value>
      </DetailRow>
      <button onClick={onEdit}>Edit</button>
      <button
        onClick={() => {
          console.log("cancelling...");
        }}
      >
        Cancel
      </button>

      <DetailRow>
        <Label>Surname:</Label>
        <Value>
          {(hasDebtor && appointment.debtor.debtor.debtor_surname) || "N/A"}
        </Value>
      </DetailRow>
      <DetailRow>
        <Label>Reason:</Label>
        <Value>{appointment.description || "N/A"}</Value>
      </DetailRow>
      <DetailRow>
        <Label>Start Time:</Label>
        <Value>{appointment.start_time || "N/A"}</Value>
      </DetailRow>
      <DetailRow>
        <Label>Status:</Label>
        <Value>
          {appointment.booking_status && !appointment.cancelled
            ? "Active"
            : "Cancelled"}
        </Value>
      </DetailRow>
    </DetailsContainer>
  );
};

// const StyledIcon = styled(UserIcon)`
//   background-color: #e0e0e0;
//   width: 100px !important;
//   height: 100px !important;
//   border-radius: 50%;
//   margin-bottom: 10px;
//   padding: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 24px;
//   color: #333;
//   position: relative;
//   margin: 0px auto;
// `;

// const DetailsContainer = styled.div`
//   padding: 15px;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   height: 100%;
// `;

// const DetailRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 0;

//   &:not(:last-child) {
//     border-bottom: 1px solid #ddd;
//   }
// `;

// const Label = styled.span`
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 16px;
// `;

// const Value = styled.span`
//   color: #333;
//   font-size: 16px;
// `;

export default AppointmentDetails;
