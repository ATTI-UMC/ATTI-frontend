import React from 'react'
import styled from 'styled-components'
import logoAtti from '../assets/images/logoAtti.png'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 78px;
  height: 70px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #000;
  margin-left: 20px;
`;

export default function LoginHeader() {
  return (
    <HeaderContainer>
      <Logo src={logoAtti} alt="Logo" />
      <Title>아띠</Title>
    </HeaderContainer>
  )
}
