import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../api/fetch";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  const handleLogin = async (id, password) => {
    try {
      const userInfo = await fetchLogin(id, password);
      localStorage.setItem("userId", userInfo.userid.toString());
      localStorage.setItem("nickname", userInfo.nickname);

      nav("/home");
    } catch (error) {
      if (error.message === "Unauthorized") {
        setErrorMessage("로그인에 실패");
        setShowModal(true);
      } else {
        console.log("로그인 중 오류 발생:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <LoginContainer>
        <LoginHeader />
        <LoginForm onLogin={handleLogin} />
        <LoginFooter />
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          error={errorMessage}
        />
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
