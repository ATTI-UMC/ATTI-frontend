import styled from "styled-components";
import Header from "../components/mypage/Header";
import NoAlarm from "../components/notification/NoAlarm";
import Content from "../components/notification/Content";
import { useState } from "react";

const Notification = () => {
  //알람 배열 받아와서 저장 - Notifications에
  const dummy = [
    {
      notification_id: 13,
      user_id: 2,
      title: "Work Chat",
      last_message: "Discussing project details and deadlines.",
    },
    {
      notification_id: 12,
      user_id: 3,
      title: "Work Chat",
      mbti: "INFP",
      last_message: "Discussing project details and deadlines.",
    },
    {
      notification_id: 1,
      user_id: 3,
      title: "Work Chat",
      mbti: "INFP",
      last_message: "Discussing project details and deadlines.",
    },
    {
      notification_id: 14,
      user_id: 3,
      title: "Work Chat",
      mbti: "INFP",
      last_message: "Discussing project details and deadlines.",
    },
    {
      notification_id: 4,
      user_id: 3,
      title: "Work Chat",
      mbti: "INFP",
      last_message: "Discussing project details and deadlines.",
    },
  ];
  const noAlarm = [];

  const [notifications, setNotifications] = useState(dummy);

  return (
    <Container>
      <Header title={"알림창"} />
      {notifications.length === 0 ? (
        <NoAlarm />
      ) : (
        <Content objectList={notifications} />
      )}
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
