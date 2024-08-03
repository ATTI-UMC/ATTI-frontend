import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import NextButton from "../../components/onboarding/NextButton";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const Onboarding = () => {
  const { disable, address, setDisable } = useOnboardingStore((state) => ({
    address: state.address,
    disable: state.disable,
    setDisable: state.setDisable,
  }));
  const nav = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    setDisable(true);
    switch (location.pathname) {
      case "/onboarding/personal-info":
        setProgress(25);
        break;
      case "/onboarding/mbti-info":
        setProgress(50);
        break;
      case "/onboarding/interest-info":
        setProgress(75);
        break;
      case "/onboarding/terms-agreement":
        setProgress(100);
        break;
      default:
        setProgress(25);
    }
  }, [location, setDisable]);

  const handleClick = (address) => {
    if (!disable) {
      setProgress((prev) => progress + 25);
      nav(address);
    }
  };

  return (
    <OnboardingContainer>
      <ProgressBar progress={progress} />
      <Outlet />
      <NextButton onClick={() => handleClick(address)} />
    </OnboardingContainer>
  );
};

export default Onboarding;

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
