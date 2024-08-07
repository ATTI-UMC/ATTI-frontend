import React, { useState } from "react";
//import { v4 as uuidv4 } from 'uuid';
import ChatHeader from "../../components/chat/ChatHeader";
import Layout from "../../components/Layout"
import Info from "../../components/chat/Info";
import InputField from "../../components/chat/InputField";
import MessageList from "../../components/chat/MessageList";
import MessageItem from "../../components/chat/MessageItem";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if(inputValue.trim()) {
      const newMessage = {
        //id: uuidv4(),
        text: inputValue,
        isOwnMessage: true,   
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return(
    <Layout>
      <ChatHeader />
      <Info />
      <MessageList messages={messages} />
      <InputField 
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSend={handleSend}
      />
    </Layout>
  );
};

export default ChatRoom;
