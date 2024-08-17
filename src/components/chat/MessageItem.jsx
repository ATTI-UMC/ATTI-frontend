import React from "react";
import styled from "styled-components";

const MessageItem = ({ message, showTimeStamp }) => (
  <MessageItemWrapper isOwnMessage={message.isOwnMessage}>
    {showTimeStamp && <TimeStamp>{formatTimestamp(message.timestamp)}</TimeStamp>}
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
const TimeStamp = styled.div`
  font-size: 10px;
  color: #999;
  margin-top: 18px;
  margin-right: 3px;
  margin-left: 3px;
`
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2,'0');
  const ampm = hours < 12 ? '오전' : '오후';

  hours = hours % 12 || 12;
  
  return `${ampm} ${hours}:${minutes}`;
};