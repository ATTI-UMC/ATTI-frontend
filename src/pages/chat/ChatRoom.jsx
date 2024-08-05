import React from "react";
import ChatHeader from "../../components/chat/ChatHeader";
import Layout from "../../components/Layout"
import Info from "../../components/chat/Info";

const ChatRoom = () => {
  return(
    <Layout>
      <ChatHeader />
      <Info />
    </Layout>
  );
};

export default ChatRoom;
