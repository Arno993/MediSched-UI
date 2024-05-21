import styled, { keyframes } from "styled-components";
import { colors } from "../../shared/global-styles/color";
import backgroundImage from "../assets/background.png";

const shakeError = keyframes`
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  10%, 50%, 90% {
    transform: translateX(-4px);
  }
  20%, 60% {
    transform: translateX(4px);
  }
`;

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const BackgroundImg = styled.div`
  background: url(${backgroundImage}) no-repeat;
  filter: brightness(0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  max-width: 80%;
`;

export const InfoPanel = styled.div`
  width: 55%;
  color: ${colors.white};
  padding: 25px 45px 25px 45px;
  background: ${colors.navy};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: calc(100vh - 350px);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.blackTranslucent};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContent = styled.div`
  position: relative;
  top: 0;

  > h1 {
    margin-bottom: 30px;
  }

  > p {
    font-size: clamp(0.5rem, 1.4vw, 1.04rem);
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`;

export const LoginBox = styled.div`
  width: 30%;
  padding: 15px 25px 20px 25px;
  background-color: ${colors.white};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 350px);
  z-index: 1;
`;

export const H2 = styled.h2`
  margin-bottom: 40px;
  color: ${colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  background-color: ${colors.lightGray};
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.08);

  :hover,
  :focus,
  :active,
  :focus-visible {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;

  &:disabled {
    background-color: ${colors.mediumGray};
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${colors.darkerBlue};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: ${colors.darkBlue};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const LoginError = styled.div`
  position: relative;
  height: 100%;
  max-height: 35px;
  background-color: ${colors.redTranslucent};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  bottom: 35px;
  margin: auto;

  p {
    opacity: 0;
    animation: ${shakeError} 0.4s forwards;
    font-size: 13px;
    margin: auto;
  }
`;

export const StyledSpacer = styled.div`
  height: 10px;
`;
