import React from "react";
import styled from "styled-components";

const Button = ({ disabled }) => {
  return <Btn>다음</Btn>;
};

export default Button;

const Btn = styled.button`
  width: calc(100% - 40px);
  max-width: 400px;
  height: 50px;
  padding: 15px;
  margin-top: auto;
  margin-bottom: 20px;
  background-color: #d9d9d9;
  border-radius: 50px;
  border:none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
