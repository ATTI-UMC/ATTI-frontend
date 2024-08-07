import React from "react";
import MessageItem from "./MessageItem";
import styled from "styled-components";

const MessageList = ({ messages }) => {
  return (
    <MessageListContainer>
      {messages.map(message =>(
        <MessageItem 
          //key={message.id} 
          message={message} />
      ))}
    </MessageListContainer>
  )
}

export default MessageList;

const MessageListContainer = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #fff;
  overflow-y: auto;
`