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
      {messages.map(message =>(
        <MessageItem 
          //key={message.id} 
          message={message} />
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