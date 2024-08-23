import styled from "styled-components";
import Header from "../components/mypage/Header";
import NoAlarm from "../components/notification/NoAlarm";
import Content from "../components/notification/Content";
import { useState, useEffect } from "react";
import axios from "axios";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isError, setIsError] = useState(false);
  const storedUserId = localStorage.getItem("userId");
  const userid = storedUserId ? parseInt(storedUserId, 10) : null;
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `http://teamatti.site:3000/notifications/${userid}`
        );
        setNotifications(response.data);
        console.log(response);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setIsError(true); // 404 에러 시 에러 상태 설정
        } else {
          console.error("Error fetching notifications:", error);
        }
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Container>
      <Header title={"알림창"} />
      {isError || notifications.length === 0 ? (
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
