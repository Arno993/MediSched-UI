import styled from "styled-components";
import { colors } from "../shared/global-styles/color";

export const FloatingButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: 30px;
  width: 55px;
  height: 55px;
  padding-top: 0px;
  background-color: ${colors.medicalGreen};
  color: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 50px;
  display: flex;
  padding-bottom: 7px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a9f90;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
