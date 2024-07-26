import React from "react";
import styled from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import Debug from "./Debug";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </LoginContainer>
      <Debug></Debug>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
