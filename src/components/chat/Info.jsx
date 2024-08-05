import React from "react";
import styled from "styled-components";
import INTJ from "../../assets/images/INTJ.png"
import exitBtn from "../../assets/images/exitBtn.png"
import reportBtn from "../../assets/images/reportBtn.png"

const Info = () => (
  <Container>
    <InfoContainer>
      <MBTIIcon src = { INTJ }/>
      <Nickname>닉네임</Nickname>
      <MBTI>INTJ</MBTI>
    </InfoContainer>
    <IconsContainer>
      <Icon src={ reportBtn } alt="report"/>
      <Icon src={ exitBtn } alt="exit"/>
    </IconsContainer>
  </Container>
);

export default Info;

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
`
const MBTIIcon = styled.img`
  width: 54px;
  height: 60px;
`
const Nickname = styled.p`
  font-size: 16px;
  margin-left: 2px;
`
const MBTI = styled.p`
  font-size:16px;
  font-weight: bold;
  margin-left: 5px;
  color: #10D99B;
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 12px;
`
const Icon = styled.img`
  width: 16px;
  height: 18px;
`