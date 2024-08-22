import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const SignUpHeader = () => {
  const nav = useNavigate();
  return (
    <HeaderWrapper>
      <BackBtn
        onClick={() => {
          nav(-1);
        }}
      >
        <BackButtonImg src={backBtn} alt="Back" />
      </BackBtn>
      <Title>회원가입</Title>
    </HeaderWrapper>
  );
};

export default SignUpHeader;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  position: relative;
  margin-bottom: 20px;
`;

const BackBtn = styled.button`
  width: 10px;
  height: 20px;
  margin: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
const BackButtonImg = styled.img`
  width: 10px;
  height: 20px;
`;

const Title = styled.h1`
  flex: 1;
  margin: 0 10px 0 20px;
  font-size: 18px;
  font-weight: bold;
`;
