import React, { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import styled from "styled-components";

const MessageList = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if(bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior:"smooth"});
    }
  }, [messages]);

  return (
    <MessageListContainer>
      {messages.map((message, index) =>(
        <MessageItem 
          key={index} 
          message={message} 
          showTimeStamp={shouldShowTimestamp(messages, index)}/>
      ))}
      <div ref={bottomRef}></div>
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
const shouldShowTimestamp = (messages, index) => {
  if (index === 0) return true;

  const currentMessageDate = new Date(messages[index].timestamp);
  const previousMessageDate = new Date(messages[index - 1].timestamp);

  const currentMinutes = currentMessageDate.getMinutes();
  const previousMinutes = previousMessageDate.getMinutes();

  const currentHours = currentMessageDate.getHours();
  const previousHours = previousMessageDate.getHours();

  // 시간과 분이 모두 동일하다면 타임스탬프를 표시하지 않습니다.
  // 시간이 다르거나 분이 달라졌을 때 타임스탬프를 표시합니다.
  return currentHours !== previousHours || currentMinutes !== previousMinutes;
};