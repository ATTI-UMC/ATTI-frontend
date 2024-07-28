import React from "react";
import styled from "styled-components";
import NextButton from "../../components/onboarding/NextButton";

const TermsAgreement = () => {
  return (
    <Container>
      <Header />
      <Content />
      <NextButton />
    </Container>
  );
};

export default TermsAgreement;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Title>마지막으로</Title>
      <Title>필요한 항목 동의해주세요!</Title>
      <SubTitle>이제 곧 아띠를 시작할거에요!</SubTitle>
    </HeaderContainer>
  );
};

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

const Content = () => {
  return (
    <ContentContainer>
      <TermContainer>
        <TermRadio type="radio"></TermRadio>
        <TermText>아띠 이용약관 동의</TermText>
        <TermText className="required">(필수)</TermText>
      </TermContainer>
      <TermContainer>
        <TermRadio type="radio"></TermRadio>
        <TermText>개인정보 수집 및 이용 동의</TermText>
        <TermText className="required">(필수)</TermText>
      </TermContainer>
      <TermContainer></TermContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 20px;
`;

const TermContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const TermRadio = styled.button`
  width: 22px;
  height: 22px;
  border: none;
`;

const TermText = styled.div`
  display: flex;
  align-items: center;

  &.required {
    color: blue;
    font-size: 14px;
  }
`;
