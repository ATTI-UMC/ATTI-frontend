import React from "react";
import styled from "styled-components";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const NextButton = ({ onClick }) => {
  const disable = useOnboardingStore((state) => state.disable);

  return (
    <Button onClick={onClick} disabled={disable}>
      다음
    </Button>
  );
};

export default NextButton;

const Button = styled.button`
  width: 80%;
  max-width: 400px;
  height: 50px;
  padding: 15px;
  margin-top: 15px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? "#d9d9d9" : "#10D99B")};
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
