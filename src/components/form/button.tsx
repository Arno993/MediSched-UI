import styled, { css } from "styled-components";
import { colors } from "../../shared/global-styles/color";

export enum Theme {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
  text = "text",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const rippleAnimation = css`
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 0.5;
    }
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
`;

const RippleButton = styled.button<ButtonProps>`
  ${rippleAnimation}
  position: relative;
  overflow: hidden;
  padding: 10px;
  margin: 0 0.25rem;
  border-radius: 20px;
  background: ${({ isActive }) =>
    isActive ? `${colors.darkNavy}` : `${colors.lightGray}`};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  border: none;
  min-width: 70px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #fff;
    background-color: ${({ isActive }) =>
      isActive ? `${colors.darkNavy}` : "#d3d3d3 !important"};
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    transition: opacity 0s, transform 0s;
  }

  &:active::after {
    transform: scale(10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
`;

const StyledButton: React.FC<ButtonProps> = ({
  isActive,
  children,
  onClick,
}) => {
  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const rippleSize = Math.min(rect.width, rect.height);
    const x = event.clientX - rect.left - rippleSize / 2;
    const y = event.clientY - rect.top - rippleSize / 2;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
    ripple.style.background = "rgba(255, 255, 255, 0.7)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    button.appendChild(ripple);

    if (onClick) {
      onClick(event);
    }

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <RippleButton isActive={isActive} onClick={handleButtonClick}>
      {children}
    </RippleButton>
  );
};

export default StyledButton;
