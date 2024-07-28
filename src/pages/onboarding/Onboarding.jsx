import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import NextButton from "../../components/onboarding/NextButton";

const Onboarding = () => {
  const nav = useNavigate();

  const [progress, setProgress] = useState(25);

  const handleClick = () => {
    setProgress((prev) => progress + 25);
  };

  return (
    <OnboardingContainer>
      <ProgressBar progress={progress} />
      <Outlet />
      <NextButton onClick={handleClick} />
    </OnboardingContainer>
  );
};

export default Onboarding;

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
