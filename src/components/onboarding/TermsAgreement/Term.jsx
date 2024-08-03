import React from "react";
import styled from "styled-components";

const Term = ({ text, isRequired }) => {
  return (
    <TermContainer>
      <TermRadio type="checkbox" />
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

const TermRadio = styled.input`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
  background-color: #d9d9d9;
  &:checked {
    background-color: #d9d9d9;
  }
`;

const TermText = styled.div`
  display: flex;
  align-items: center;

  &.required {
    color: blue;
    font-size: 14px;
  }
`;
