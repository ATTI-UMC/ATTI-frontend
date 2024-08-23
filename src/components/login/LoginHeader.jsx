import React from "react";
import styled from "styled-components";
import logoAtti from "../../assets/images/logo.png";

const LoginHeader = () => {
  return (
    <HeaderContainer>
      <Logo src={logoAtti} alt="Logo" />
      <Title>아띠</Title>
    </HeaderContainer>
  );
};

export default LoginHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-left: 20px;
`;
