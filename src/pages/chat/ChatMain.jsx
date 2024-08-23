import React from "react";
import styled from "styled-components";
import HeaderMain from "../../components/HeaderMain";
import Explain from "../../components/chat/Explain";
import ChooseChat from "../../components/chat/ChooseChat";

const ChatMain = () => {
  return (
    <>
      <HeaderMain />
      <ContentWrapper>
        <Explain />
        <ChooseChat />
      </ContentWrapper>
    </>
  );
};

export default ChatMain;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 60px;
`;
