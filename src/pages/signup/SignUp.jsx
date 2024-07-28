import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SignUpHeader from "../../components/signup/SignUpHeader";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <Outlet />
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
