import React, { useEffect, useRef, useState } from "react";
import SidebarIcon from "./sidebar-icon";
import { LogoutButton, Name, ProfileCircle, Tooltip } from "./tooltip";
import { useNavigate } from "react-router-dom";
import DiaryIcon from "./icons/diary";
import PatientsIcon from "./icons/patients";
import { SettingsContainer } from "./menu";
import { useTooltipBlur } from "./hooks/tooltip-blur";
import {
  SidebarContainer,
  Spacer,
  IconsContainer,
} from "./styles/styled-sidebar";

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
        <img
          src="/assets/images/Borcelle.svg"
          alt=""
          onClick={() => navigate("/diaries")}
        />
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
          {/* Hardcoded for now */}
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
