import React from "react";
import styled from "styled-components";
import INTJ from "../../assets/images/INTJ.png"
import button_exit from "../../assets/images/button_exit.png"
import button_report from "../../assets/images/button_report.png"

const Info = () => (
  <Container>
    <InfoWrapper>
      <MBTIIcon src = { INTJ }/>
      <Nickname>닉네임</Nickname>
      <MBTI>INTJ</MBTI>
    </InfoWrapper>
    <IconsWrapper>
      <Icon src={ button_report } alt="report"/>
      <Icon src={ button_exit } alt="exit"/>
    </IconsWrapper>
  </Container>
);

export default Info;

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

const InfoWrapper = styled.div`
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

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 12px;
`
const Icon = styled.img`
  width: 16px;
  height: 18px;
  cursor: pointer;
`