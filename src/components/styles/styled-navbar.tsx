import styled from "styled-components";
import { colors } from "../../shared/global-styles/color";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  align-items: center;
  padding: 0.5rem 1rem;
  width: calc(100% - 120px);
  height: 40px;
  margin-left: 80px;
  position: fixed;
  padding: 10px 18px 10px 20px;
  z-index: 1;
  top: 0;
`;

export const DateDisplay = styled.div`
  color: ${colors.darkNavy};
  font-size: 1.9rem;

  > span:nth-child(2) {
    margin-left: 8px;
    color: ${colors.gray};
    font-size: 1.1rem;
    position: relative;
    bottom: 0px;
  }
`;

export const ViewButtons = styled.div`
  display: flex;
  font-size: 13px;
  color: ${colors.mediumGray}; // Distinct without overwhelming, ideal for less prominent text
`;
