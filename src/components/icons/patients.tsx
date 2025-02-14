import React from "react";

interface IconProps {
  isActive: boolean;
}

const PatientsIcon: React.FC<IconProps> = ({ isActive }) => {
  const fillColor = isActive ? "#fff" : "#000";

  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.82 2H16C17.1 2 18 2.9 18 4V18C18 19.1 17.1 20 16 20H2C0.9 20 0 19.1 0 18V4C0 2.9 0.9 2 2 2H6.18C6.6 0.84 7.7 0 9 0C10.3 0 11.4 0.84 11.82 2ZM10 3C10 2.45 9.55 2 9 2C8.45 2 8 2.45 8 3C8 3.55 8.45 4 9 4C9.55 4 10 3.55 10 3ZM9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6ZM3 16.6V18H15V16.6C15 14.6 11 13.5 9 13.5C7 13.5 3 14.6 3 16.6Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PatientsIcon;
