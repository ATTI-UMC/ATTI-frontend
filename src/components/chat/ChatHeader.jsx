import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ title }) => {
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
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default ChatHeader;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #10d99b;
`;
const BackBtn = styled.button`
  width: 10px;
  height: 20px;
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
  margin-top: 5px;
  flex: 1;
  font-size: 18px;
  font-weight: bold;
`;
