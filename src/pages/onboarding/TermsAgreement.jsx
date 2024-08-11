import React from "react";
import styled from "styled-components";
import Header from "../../components/onboarding/TermsAgreement/Header";
import Content from "../../components/onboarding/TermsAgreement/Content";
import { TermAgreementProvider } from "../../context/TermAgreementContext";

const TermsAgreement = () => {
  return (
    <TermAgreementProvider>
      <Container>
        <Header />
        <Content />
      </Container>
    </TermAgreementProvider>
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
