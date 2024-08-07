import React from "react";
import styled from "styled-components";

const MessageItem = ({ message }) => (
  <MessageItemWrapper isOwnMessage={message.isOwnMessage}>
    <MessageBubble isOwnMessage={message.isOwnMessage}>
      {message.text}
    </MessageBubble>
  </MessageItemWrapper>
);

export default MessageItem;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ isOwnMessage }) => (isOwnMessage ? '#10D99B' : '#fff')};
  color: ${({ isOwnMessage }) => (isOwnMessage ? '#fff' : '#5A5A5A')};
`

const MessageItemWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ${({ isOwnMessage }) => isOwnMessage && 'justify-content: flex-end;'}
`
