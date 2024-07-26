import styled from "styled-components";
import React from "react";
import MbtiContainer from "./MbtiContainer";

const MbtiForm = () => {
  return (
    <FormContainer>
      <MbtiContainer
        left={"E"}
        right={"I"}
        leftDescription={"외향적"}
        rightDescription={"내향적"}
      />
      <MbtiContainer
        left={"S"}
        right={"N"}
        leftDescription={"감각적"}
        rightDescription={"직관적"}
      />
      <MbtiContainer
        left={"T"}
        right={"F"}
        leftDescription={"논리적"}
        rightDescription={"감정적"}
      />
      <MbtiContainer
        left={"P"}
        right={"J"}
        leftDescription={"계획적"}
        rightDescription={"자율적"}
      />
    </FormContainer>
  );
};

export default MbtiForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
