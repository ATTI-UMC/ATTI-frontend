import React from "react";
import styled from "styled-components";
import { useTermAgreement } from "../../../context/TermAgreementContext";

const Term = ({ text, id, isRequired }) => {
  const { agreedTerms, toggleAgreement } = useTermAgreement();
  const isChecked = agreedTerms[id];

  return (
    <TermContainer>
      <TermCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleAgreement(id)}
      />
      <TermText>
        {text}
        {isRequired && <TermText className="required">(필수)</TermText>}
      </TermText>
    </TermContainer>
  );
};

export default Term;

const TermContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const TermCheckbox = styled.input`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const TermText = styled.div`
  display: flex;
  align-items: center;

  &.required {
    color: blue;
    font-size: 14px;
  }
`;
