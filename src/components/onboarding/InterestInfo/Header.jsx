import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>아띠 멤버님의</Title>
      <Title>관심사가 궁금해요!</Title>
      <SubTitle>미래의 친구들에게 알려줄거에요!</SubTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const SubTitle = styled.div`
  margin: 8px 0;
  font-size: 14px;
`;
