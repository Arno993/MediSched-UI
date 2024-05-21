import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const jiggleAndShrink = keyframes`
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50px) scale(0.5);
  }
`;

export const Tooltip = styled.div<{ isOpen: boolean; isAnimatingOut: boolean }>`
  position: absolute;
  left: 100%;
  bottom: 0px;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  margin-left: 32px;
  width: 220px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen, isAnimatingOut }) =>
    isOpen
      ? css`
          ${fadeIn} 0.3s ease-in-out forwards
        `
      : isAnimatingOut
      ? css`
          ${jiggleAndShrink} 0.3s ease-in-out forwards
        `
      : "none"};
`;

export const ProfileCircle = styled.div`
  background-color: #e0e0e0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: #fff;
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;

export const Name = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  padding: 10px 0px 35px;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;
