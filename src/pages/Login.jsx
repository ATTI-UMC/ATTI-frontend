import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import Modal from "../components/Modal";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <LoginContainer>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
        <button onClick={handleClick}>모달확인용</button>
        <Modal show={showModal} onClose={handleClick} error={"로그인에 실패"} />
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
