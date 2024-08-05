import React from "react";
import ChatHeader from "../../components/chat/ChatHeader";
import Layout from "../../components/Layout"
import Info from "../../components/chat/Info";
import InputField from "../../components/chat/InputField";

const ChatRoom = () => {
  return(
    <Layout>
      <ChatHeader />
      <Info />
      <InputField />
    </Layout>
  );
};

export default ChatRoom;
