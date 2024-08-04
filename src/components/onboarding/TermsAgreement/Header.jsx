import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>마지막으로</Title>
      <Title>필요한 항목 동의해주세요!</Title>
      <SubTitle>이제 곧 아띠를 시작할거에요!</SubTitle>
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
