import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  ModalFooter,
  ButtonGroup,
  Button,
  CloseButton,
  ButtonProps,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { createBooking } from "../../../bookings/actions/create-booking";
import { Appointment } from "../../../diary/domain/appointment";
import { colors } from "../../../shared/global-styles/color";

interface AppointmentModalProps {
  onClose: () => void;
  appointment?: Appointment;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  onClose,
  appointment,
}) => {
  const [diaryUid, setDiaryUid] = useState<string>("");
  const [bookingTypeUid, setBookingTypeUid] = useState<string>("");
  const [bookingStatusUid, setBookingStatusUid] = useState<string>("");
  const [debtorName, setDebtorName] = useState<string>("");
  const [debtorSurname, setDebtorSurname] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    setDiaryUid(appointment?.diary_uid?.toString() || "");
    setBookingTypeUid(appointment?.booking_type_uid?.toString() || "");
    setBookingStatusUid(appointment?.booking_status_uid?.toString() || "");
    setDebtorName(appointment?.debtor?.debtor?.debtor_name || "");
    setDebtorSurname(appointment?.debtor?.debtor?.debtor_surname || "");
    setCellphone(appointment?.debtor?.debtor.debtor_cellnr || "");
    setDate(
      appointment?.start_time ? appointment?.start_time.split("T")[0] : ""
    );
    setTime(
      appointment?.start_time ? appointment?.start_time.split("T")[1] : ""
    );
    setDuration(appointment?.duration?.toString() || "");
  }, [appointment]);

  const saveBooking = async () => {
    try {
      const startTime = `${date}T${time}:00`;
      const response = await createBooking(
        1,
        parseInt(diaryUid),
        parseInt(bookingTypeUid),
        parseInt(bookingStatusUid),
        startTime,
        parseInt(duration),
        1, // patient_uid
        "Example reason" // hardcoded for now...
      );
      console.log("Booking saved successfully", response);
      onClose();
    } catch (error) {
      console.error("Failed to save booking", error);
      alert("Failed to save booking");
    }
  };

  return (
    <ModalFormContainer>
      <StyledModalHeader>
        {appointment ? "Edit Booking" : "Create New Booking"}
        <StyledCloseButton variant="white" onClick={onClose} />
      </StyledModalHeader>
      <ModalContent>
        <Container fluid>
          <h3>Booking Details</h3>
          <hr />
          <Row>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="diary">Diary </Form.Label>
                <Form.Control
                  id="diary"
                  placeholder="GP_1"
                  value={diaryUid}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="diary">Type </Form.Label>
                <Form.Select
                  id="type"
                  value={bookingTypeUid}
                  onChange={(e) => setBookingTypeUid(e.target.value)}
                >
                  <option>Select a type</option>
                  <option value="1">Consultation</option>
                  <option value="2">Follow-up</option>
                  <option value="3">Meeting</option>
                  <option value="4">Out of office</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="status">Status </Form.Label>
                <Form.Select
                  id="status"
                  value={bookingStatusUid}
                  onChange={(e) => setBookingStatusUid(e.target.value)}
                >
                  <option>Select a type</option>
                  <option value="1">Booked</option>
                  <option value="2">Arrived</option>
                  <option value="3">Ready</option>
                  <option value="4">Treated</option>
                  <option value="5">Done</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="date">Date</Form.Label>
                <Input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="time">Time</Form.Label>
                <Input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label htmlFor="duration">Duration (minutes)</Form.Label>
                <Input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <h3>Debtor Details</h3>
          <hr />
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label htmlFor="debtorName">Name</Form.Label>
                <Form.Control
                  id="debtorName"
                  value={debtorName}
                  onChange={(e) => setDebtorName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label htmlFor="debtorSurname">Surname</Form.Label>
                <Form.Control
                  id="debtorSurname"
                  value={debtorSurname}
                  onChange={(e) => setDebtorSurname(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Group>
                <Form.Label htmlFor="cellphone">Cellphone</Form.Label>
                <Form.Control
                  id="cellphone"
                  value={cellphone}
                  onChange={(e) => setCellphone(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </ModalContent>
      <StyledModalFooter>
        <ButtonGroup>
          <StyledCancelButton variant="secondary" onClick={onClose}>
            Cancel
          </StyledCancelButton>
        </ButtonGroup>
        <ButtonGroup>
          <StyledPrimaryButton variant="primary" onClick={saveBooking}>
            Save
          </StyledPrimaryButton>
        </ButtonGroup>
      </StyledModalFooter>
    </ModalFormContainer>
  );
};

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  justify-content: space-between;
  padding: 24px 25px 24px 25px !important;
  font-size: 22px;
  background-color: ${colors.darkNavy};
  color: #fff;
  width: 80%;
  max-width: 960px;
  margin: auto;
  position: relative;
  top: 80px;
  border-top-right-radius: 10px !important;
  border-top-left-radius: 10px !important;
  z-index: 999;
`;

const StyledModalFooter = styled(ModalFooter)`
  display: flex !important;
  justify-content: space-between !important;
  padding: 24px 25px 24px 25px !important;
  font-size: 22px;
  background-color: #ffffff !important;
  color: #fff;
  width: 80%;
  max-width: 960px;
  margin: auto;
  position: relative;
  align-content: center;
  bottom: 85px;
  border-bottom-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  border-top: 1px solid #e6e6e6;
  height: 85px;
`;

const ModalFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const ModalContent = styled.div`
  height: 70%;
  background: white;
  padding: 100px 40px !important;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: auto;
  overflow-y: scroll;
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const StyledPrimaryButton = styled(Button as React.ComponentType<ButtonProps>)`
  width: 90px;
  height: 45px;
  background-color: ${colors.navy};
  border: none;

  &:hover {
    background-color: ${colors.darkNavy};
  }
`;

const StyledCancelButton = styled(Button as React.ComponentType<ButtonProps>)`
  background-color: transparent;
  border: none;
  color: black;

  &:hover {
    color: ${colors.darkNavy};
    background-color: transparent !important;
    border-color: transparent !important;
  }

  &:focus,
  &:active {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
`;

const StyledCloseButton = styled(CloseButton)`
  color: #fff;
  background-color: transparent;

  :hover {
    color: #fbfbfb;
  }
`;
