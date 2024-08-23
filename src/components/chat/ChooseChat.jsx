import React from "react";
import styled from "styled-components";
import random from "../../assets/images/chat_random.png";
import MBTI from "../../assets/images/chat_MBTI.png";
import pick from "../../assets/images/chat_pick.png";
import { useNavigate } from "react-router-dom";

const ChooseChat = () => {
  const nav = useNavigate();
  return (
    <ContentWrapper>
      <ChatRoute src={random} onClick={() => nav("/chatroom")} />
      <ChatRoute src={MBTI} onClick={() => nav("/chatroom")} />
      <ChatRoute src={pick} onClick={() => nav("/chatroom")} />
    </ContentWrapper>
  );
};

export default ChooseChat;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ChatRoute = styled.img`
  width: 100%;
  height: 150px;
`;
