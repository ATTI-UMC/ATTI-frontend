import React from "react";
import styled from "styled-components";

const Explain = () => {
  return (
    <Wrapper>
      <Title>MBTI 아띠님!</Title>
      <Message>새로운 친구를 사귀어 볼까요?</Message>
    </Wrapper>
  );
};

export default Explain;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 30px 8px;
`;

const Title = styled.span`
  color: #0fbd88;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Message = styled.span`
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
