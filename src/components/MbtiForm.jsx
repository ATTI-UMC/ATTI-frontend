import styled from "styled-components";
import React from "react";

const MbtiForm = () => {
  return (
    <FormContainer>
      <Wrapper>
        <CircleContainer>
          <BigCircle>E</BigCircle>
          <SmallCircle></SmallCircle>
          <SmallCircle></SmallCircle>
          <BigCircle>I</BigCircle>
        </CircleContainer>
        <DescriptionContainer>
          <Description>외향적</Description>
          <Description>내향적</Description>
        </DescriptionContainer>
      </Wrapper>{" "}
      <Wrapper>
        <CircleContainer>
          <BigCircle>S</BigCircle>
          <SmallCircle></SmallCircle>
          <SmallCircle></SmallCircle>
          <BigCircle>N</BigCircle>
        </CircleContainer>
        <DescriptionContainer>
          <Description>감각적</Description>
          <Description>직관적</Description>
        </DescriptionContainer>
      </Wrapper>{" "}
      <Wrapper>
        <CircleContainer>
          <BigCircle>T</BigCircle>
          <SmallCircle></SmallCircle>
          <SmallCircle></SmallCircle>
          <BigCircle>F</BigCircle>
        </CircleContainer>
        <DescriptionContainer>
          <Description>논리적</Description>
          <Description>감정적</Description>
        </DescriptionContainer>
      </Wrapper>{" "}
      <Wrapper>
        <CircleContainer>
          <BigCircle>J</BigCircle>
          <SmallCircle></SmallCircle>
          <SmallCircle></SmallCircle>
          <BigCircle>P</BigCircle>
        </CircleContainer>
        <DescriptionContainer>
          <Description>계획적</Description>
          <Description>자율적</Description>
        </DescriptionContainer>
      </Wrapper>
    </FormContainer>
  );
};

export default MbtiForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const BigCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(153, 153, 153, 0.6);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  cursor: pointer;
  font-size: 28px;
`;

const SmallCircle = styled.div`
  border: 1px solid rgba(153, 153, 153, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin: 10px 15px;
`;
