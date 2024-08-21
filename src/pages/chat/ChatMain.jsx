import React from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import Layout from "../../components/Layout";
import HeaderMain from "../../components/HeaderMain";
import Explain from "../../components/chat/Explain";
import ChooseChat from "../../components/chat/ChooseChat";

const ChatMain = () => {
  return (
    <Layout>
      <HeaderMain />
      <ContentWrapper>
        <Explain />
        <ChooseChat />
      </ContentWrapper>
    </Layout>
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
