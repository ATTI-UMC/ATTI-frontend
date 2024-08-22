import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/FriendRecommendation/Header";
import UserCard from "../components/FriendRecommendation/UserCard";
import axios from "axios";

const FriendRecommendation = () => {
  const [users, setUsers] = useState([]);
  const baseURL = "http://52.78.150.51:3000";

  useEffect(() => {
    const fetchUsers = async () => {
      let userData = [];
      for (let id = 1; id <= 4; id++) {
        const response = await axios.get(`${baseURL}/user/${id}`);
        userData.push(response.data);
      }
      userData.sort((a, b) => a.id - b.id);
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      <Header />
      <>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </>
    </Container>
  );
};

export default FriendRecommendation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
