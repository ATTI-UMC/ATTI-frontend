import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Term from "./Term";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import { useTermAgreement } from "../../../context/TermAgreementContext";

const Content = () => {
  const { setNav, setDisable } = useOnboardingStore((state) => ({
    setNav: state.setNav,
    setDisable: state.setDisable,
  }));

  const { agreedTerms } = useTermAgreement();
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    const allRequiredTerms = ["terms_of_service", "privacy_policy"];
    const allChecked = allRequiredTerms.every((term) => agreedTerms[term]);

    setIsAllChecked(allChecked);

    if (allChecked) {
      setNav("/home");
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [agreedTerms, setNav, setDisable]);

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
