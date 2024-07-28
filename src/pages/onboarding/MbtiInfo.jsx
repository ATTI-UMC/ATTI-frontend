import React from "react";
import MbtiForm from "../../components/MbtiForm";
import styled from "styled-components";
import MbtiForm from "../../components/onboarding/MbtiForm";
import NextButton from "../../components/onboarding/NextButton";

const MbtiInfo = () => {
  return (
    <MbtiContainer>
      <TextContainer>
        <Title>
          아띠 멤버님의
          <br /> MBTI는 무엇인가요?
        </Title>
        <Text>MBTI를 기반으로 친구를 찾아줘요!</Text>
      </TextContainer>
      <MbtiForm />
    </MbtiContainer>
  );
};

export default MbtiInfo;

const MbtiContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  white-space: pre-line;
  margin-bottom: 7px;
`;
const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
