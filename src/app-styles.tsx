import styled from "styled-components";
import { colors } from "./shared/global-styles/color";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
  padding-top: 65px;
  background-color: ${colors.lightGray};
  position: relative;
  gap: 20px;
`;

export const ContentBox = styled.div`
  background: ${colors.white};
  padding: 15px;
  height: calc(100vh - 143px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  .fc {
    .fc-col-header-cell-cushion {
      color: ${colors.darkNavy} !important;
      text-decoration: none !important;
    }

    .fc-daygrid-day-number {
      color: #006185 !important;
      text-decoration: none !important;
      background-color: #16bdac1f;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      padding: 0px;
      font-size: 12px;
      text-align: center;
      align-content: center;
      margin: 3px;
    }

    a {
      color: ${colors.darkNavy} !important;
    }
  }

  .fc-direction-ltr .fc-daygrid-event {
    cursor: pointer;

    .fc-event-time {
      color: ${colors.gray};
    }

    :hover {
      background-color: rgb(0 0 0 / 5%);
    }
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
