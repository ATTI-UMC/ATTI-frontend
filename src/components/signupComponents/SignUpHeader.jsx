import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png"

const HeaderWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  position: relative;
  margin-bottom: 20px;
`

const BackBtn = styled.button`
  position absolute;
  width: 10px;
  height: 20px;
  margin: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`
const BackButtonImg = styled.img`
  width: 10px;
  height: 20px;
`;

const Title = styled.h1`
  flex: 1;

  margin: 0 10px 0 20px;
  font-size: 18px;
  color: #1c1b1f;
`;

const SignUpHeader = ({ onBack }) => (
  <HeaderWrapper>
    <BackBtn onClick={onBack}>
      <BackButtonImg src={backBtn} alt="Back" />
    </BackBtn>
    <Title>회원가입</Title>
  </HeaderWrapper>
);

export default SignUpHeader;