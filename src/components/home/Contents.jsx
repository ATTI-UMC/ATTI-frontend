import React from "react";
import styled from "styled-components";
import medal from "../../assets/images/medal.png";
import book from "../../assets/images/book.png";

const Contents = () => {
  return (
    <Wrapper>
      <Title>
        <Medal src={medal} />
        INTJ 맞춤 컨텐츠
        <Medal src={medal} />
      </Title>
      <ContentBox>
        <ContentImg src={book} />
        <Detail>사고는 없다</Detail>
        <Detail>제시 싱어</Detail>
      </ContentBox>
    </Wrapper>
  );
};

export default Contents;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #0fbd88;
`;

const Medal = styled.img`
  width: 34px;
  height: 34px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 300px;
  margin-top: 30px;
  gap: 15px;
  padding: 18px 0;
  border: 1.5px solid none;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const ContentImg = styled.img`
  width: 120px;
  height: 188px;
  flex-shrink: 0;
`;

const Detail = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
