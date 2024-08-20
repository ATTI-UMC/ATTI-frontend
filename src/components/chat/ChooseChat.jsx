import React from "react";
import styled from "styled-components";
import random from "../../assets/images/chat_random.png";
import MBTI from "../../assets/images/chat_MBTI.png";
import pick from "../../assets/images/chat_pick.png";

const ChooseChat = () => {
  return (
    <ContentWrapper>
      <ChatRoute src={random} />
      <ChatRoute src={MBTI} />
      <ChatRoute src={pick} />
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
