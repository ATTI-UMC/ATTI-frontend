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
  const [curIdx, setIdx] = useState(1);
  const maxIdx = 4;

  useEffect(() => {
    setDisable(true);
    switch (location.pathname) {
      case "/onboarding/personal-info":
        setIdx(1);
        break;
      case "/onboarding/mbti-info":
        setIdx(2);
        break;
      case "/onboarding/interest-info":
        setIdx(3);
        break;
      case "/onboarding/terms-agreement":
        setIdx(4);
        break;
      default:
        setIdx(1);
    }
  }, [location, setDisable]);

  const handleClick = (address) => {
    if (!disable) {
      nav(address);
    }
  };

  return (
    <OnboardingContainer>
      <ProgressBar curIdx={curIdx} maxIdx={maxIdx} />
      <Outlet />
      <NextButton onClick={() => handleClick(address)} />
    </OnboardingContainer>
  );
};

export default Onboarding;

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
