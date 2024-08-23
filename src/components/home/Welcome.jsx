import React from "react";
import styled from "styled-components";
import INTJ from "../../assets/images/INTJ.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();
  const nickname = localStorage.getItem("nickname");
  const mbti = localStorage.getItem("mbti");

  return (
    <>
      <Container>
        <Icon src={INTJ} />
        <TextBox>
          <Title>
            {mbti} {nickname} 님!
          </Title>
          <WelcomMsg>아띠에게 다 맡겨주세요!!</WelcomMsg>
        </TextBox>
      </Container>
      <BtnWrapper>
        <Button>
          <TextBtn>간단한</TextBtn>
          <TextBtn>MBTI 검사하기</TextBtn>
        </Button>
        <Button onClick={() => nav("/friends")}>
          <TextBtn>새로운 친구</TextBtn>
          <TextBtn>추천받으러 가기</TextBtn>
        </Button>
      </BtnWrapper>
    </>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  border: 1.5px solid #10d99b;
  border-radius: 15px;
  margin: 60px 0 0 0;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 5px;
`;

const Title = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
  color: #0fbd88;
`;

const WelcomMsg = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #1c1b1f;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  background-color: #0fbd88;
`;

const TextBtn = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
