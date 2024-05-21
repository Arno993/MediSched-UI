import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for spinning
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Keyframes for fading in and out
const fadeInOut = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000008f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeInOut} 0.5s ease-in-out forwards;
`;

const Spinner = styled.div`
  width: 55px;
  height: 55px;
  border: 5px solid #a6a6a6;
  border-radius: 50%;
  border-top-color: #138db3;
  animation: ${rotate} 1s ease-in-out infinite;
`;

const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <Overlay>
      <Spinner />
    </Overlay>
  ) : null;
};

export default LoadingScreen;
