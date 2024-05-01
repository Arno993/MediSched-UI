import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SidebarIcon from "./sidebar-icon";
import { LogoutButton, Name, ProfileCircle, Tooltip } from "./tooltip";
import { useNavigate } from "react-router-dom";
import DiaryIcon from "./icons/diary";
import PatientsIcon from "./icons/patients";
import { SettingsContainer } from "./menu";
import { useTooltipBlur } from "./hooks/tooltip-blur";

const SidebarContainer = styled.div`
  width: 80px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Spacer = styled.div`
  height: 2px;
  width: 60px;
  background-color: #f3f3f3;
  position: relative;
  margin: 0px 10px 10px;
  top: 6px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  margin-bottom: auto;
`;

// const SettingsContainer = styled(IconsContainer)`
//   margin-bottom: 4px;
// `;

export const Sidebar: React.FC = () => {
  const [activeIcon, setActiveIcon] = React.useState<string>("diaries");
  const [isTooltipVisible, setIsTooltipVisible] =
    React.useState<boolean>(false);
  const navigate = useNavigate();

  const isIconActive = (iconName: string) => activeIcon === iconName;

  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const tooltipRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (showTooltip) {
      setIsTooltipVisible(true);
    }
  }, [showTooltip]);

  useTooltipBlur(tooltipRef, buttonRef, () => setIsTooltipVisible(false));

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);

    switch (iconName) {
      case "settings":
        if (isTooltipVisible) {
          setTimeout(() => {
            setIsAnimatingOut(false);
            setShowTooltip(false);
          }, 300);
        } else {
          setShowTooltip(true);
        }
        setIsTooltipVisible(!isTooltipVisible);
        break;
      case "diaries":
        navigate("/diaries");
        break;
      case "patients":
        navigate("/patients");
        break;
      default:
    }
  };

  return (
    <SidebarContainer>
      <SidebarIcon logo>
        <img src="/assets/images/medisched.svg" alt="" />
      </SidebarIcon>
      <Spacer />
      <IconsContainer>
        <SidebarIcon
          onClick={() => handleIconClick("diaries")}
          isActive={isIconActive("diaries")}
        >
          <DiaryIcon isActive={isIconActive("diaries")} />
        </SidebarIcon>
        <SidebarIcon
          onClick={() => handleIconClick("patients")}
          isActive={isIconActive("patients")}
        >
          <PatientsIcon isActive={isIconActive("patients")} />
        </SidebarIcon>
      </IconsContainer>
      <Spacer />
      <SettingsContainer
        onClick={() => handleIconClick("settings")}
        isOpen={isTooltipVisible}
      >
        <Tooltip isOpen={isTooltipVisible} isAnimatingOut={isAnimatingOut}>
          <ProfileCircle>AL</ProfileCircle>
          <Name>Arno Louw</Name>
          <LogoutButton
            onClick={() => {
              document.cookie =
                "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }}
          >
            Sign Out
          </LogoutButton>
        </Tooltip>
      </SettingsContainer>
    </SidebarContainer>
  );
};
