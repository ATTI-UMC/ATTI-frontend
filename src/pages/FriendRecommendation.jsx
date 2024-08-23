import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/FriendRecommendation/Header";
import UserCard from "../components/FriendRecommendation/UserCard";
import axios from "axios";

const FriendRecommendation = () => {
  const [users, setUsers] = useState([]);
  const baseURL = "http://teamatti.site:3000";

  useEffect(() => {
    const fetchUsers = async () => {
      let id = 1;
      let userData = [];
      const maxId = 30;

      for (let id = 1; id <= maxId; id++) {
        try {
          const response = await axios.get(`${baseURL}/user/${id}`);
          userData.push(response.data);
        } catch (error) {
          // 오류 발생 시 해당 ID는 건너뛰고 다음 ID로 진행
          console.error(`User with ID ${id} not found. Skipping.`);
          continue;
        }
      }

      userData.sort((a, b) => a.id - b.id);
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      <Header />
      <CardWrapper>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default FriendRecommendation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  width: 100%;
`;
