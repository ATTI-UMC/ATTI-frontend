import React, { useState } from "react";
import styled from "styled-components";
//import { v4 as uuidv4 } from 'uuid';
import ChatHeader from "../../components/chat/ChatHeader";
import Info from "../../components/chat/Info";
import InputField from "../../components/chat/InputField";
import MessageList from "../../components/chat/MessageList";
import MessageItem from "../../components/chat/MessageItem";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        //id: uuidv4(),
        text: inputValue,
        isOwnMessage: true,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Layout>
      <ContentContainer>
        <ChatHeader title={"채팅방"} />
        <Info />
        <MessageListWrapper>
          <MessageList messages={messages} />
        </MessageListWrapper>
        <InputField
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSend={handleSend}
        />
      </ContentContainer>
    </Layout>
  );
};

export default ChatRoom;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const MessageListWrapper = styled.div`
  flex: 1; /* Info와 InputField 사이의 모든 가용 공간을 차지하도록 설정 */
  overflow-y: auto; /* 메시지 목록이 넘칠 경우 스크롤 활성화 */
  background-color: #fff; /* 메시지 리스트 배경색 */
  margin-bottom: 32px;
`;
