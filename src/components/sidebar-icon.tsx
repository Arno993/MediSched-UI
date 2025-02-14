import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../shared/global-styles/color";

interface IconProps {
  isActive?: boolean;
  logo?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const IconPlaceholder = styled.div<IconProps>`
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 42px;
  height: 42px;
  background-color: unset;

  &:hover {
    transform: ${(props) => (props.logo ? "none" : "scale(1.08)")};
  }

  ${(props) =>
    props.logo &&
    css`
      width: 45px;
      height: 45px;
      background-color: unset;

      > img {
        width: 135px;
      }
    `}

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${colors.darkNavy};
      box-shadow: 0px 4px 6px rgba(122, 169, 223, 0.41);
      &:hover {
        box-shadow: ${props.logo
          ? "0px 4px 6px rgba(112, 112, 248, 0.3)"
          : "0px 6px 8px rgba(138, 153, 223, 0.5)"};
      }
    `}
`;

const SidebarIcon: React.FC<IconProps> = ({
  isActive,
  logo,
  onClick,
  children,
}) => {
  return (
    <IconPlaceholder onClick={onClick} isActive={isActive} logo={logo}>
      {children}
    </IconPlaceholder>
  );
};

export default SidebarIcon;
