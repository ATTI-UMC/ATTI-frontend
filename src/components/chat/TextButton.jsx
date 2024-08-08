import React from "react";
import styled from "styled-components";

const TextButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default TextButton;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:first-child {
    margin-top: 5px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`