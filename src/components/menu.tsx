import styled from "styled-components";
import { colors } from "../shared/global-styles/color";

interface HamburgerIconProps {
  isOpen?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  ref?: React.LegacyRef<HTMLDivElement>;
}

export const HamburgerIcon = styled.div<HamburgerIconProps>`
  width: 3px;
  height: 25px;
  position: relative;
  padding: 17px 13px;
  cursor: pointer;

  div {
    width: 30px;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 0;
    transform-origin: center;
    transition: transform 0.2s linear;

    &:first-child {
      top: 50%;
      background-color: ${colors.darkNavy};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-50%) rotate(45deg)" : "translateY(-9px)"};
    }

    &:nth-child(2) {
      top: 50%;
      background-color: ${colors.darkNavy};
      transition: opacity 0.01s ease-out;
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-21px) " : "translateY(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform-origin: right;
    }

    &:nth-child(3) {
      top: 50%;
      background-color: ${colors.medicalGreen};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-50%) rotate(-45deg)" : "translateY(9px)"};
    }
  }
`;

export const SettingsContainer: React.FC<HamburgerIconProps> = ({
  onClick,
  isOpen,
  children,
  ref,
}) => {
  return (
    <div ref={ref} onClick={onClick} style={{ position: "relative" }}>
      <HamburgerIcon isOpen={isOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      {children}
    </div>
  );
};
