import styled from "styled-components";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { colors } from "../../shared/global-styles/color";

export const StyledIcon = styled(UserIcon)`
  background-color: ${colors.lightGray}; // Lighter background to distinguish the icon
  width: 100px !important;
  height: 100px !important;
  border-radius: 50%;
  margin-bottom: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${colors.gray}; // Gray text for contrast against the light background
  position: relative;
  margin: 0px auto;
`;

export const DetailsContainer = styled.div`
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.mediumGray};
  }
`;

export const Label = styled.span`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
`;

export const Value = styled.span`
  color: ${colors.gray};
  font-size: 16px;
`;
