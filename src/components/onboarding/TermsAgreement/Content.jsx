import React from "react";
import styled from "styled-components";
import Term from "./Term";

const Content = () => {
  return (
    <ContentContainer>
      <Term text="아띠 이용약관 동의" id="terms_of_service" isRequired={true} />
      <Term
        text="개인정보 수집 및 이용 동의"
        id="privacy_policy"
        isRequired={true}
      />
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 20px;
  gap: 20px;
`;
