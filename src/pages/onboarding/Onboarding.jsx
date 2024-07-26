import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <h1>Progress Bar</h1>
      <Outlet />
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
