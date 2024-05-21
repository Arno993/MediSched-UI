import styled from "styled-components";
import { colors } from "../../shared/global-styles/color";

export const SidebarContainer = styled.div`
  width: 80px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-shadow: 2px 0 5px ${colors.blackTranslucent};
  position: relative;
`;

export const Spacer = styled.div`
  height: 2px;
  width: 60px;
  background-color: ${colors.ghostWhite};
  position: relative;
  margin: 0px 10px 10px;
  top: 6px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  margin-bottom: auto;
`;
