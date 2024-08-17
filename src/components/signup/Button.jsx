import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ disabled, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(to);
    }
  };

  return (
    <Btn disabled={disabled} onClick={handleClick}>
      다음
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  width: calc(100% - 40px);
  max-width: 400px;
  height: 50px;
  padding: 15px;
  margin-top: auto;
  margin-bottom: 20px;
  background-color: ${({ disabled }) => (disabled ? "#d9d9d9" : "#10D99B")};
  border-radius: 50px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
