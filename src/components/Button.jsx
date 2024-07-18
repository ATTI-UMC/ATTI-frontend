import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width: 100%;
  max-width: 400px;
  height: 60px;
  padding: 15px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.main[500]};
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Button = () => {
  <Btn></Btn>
}

export default Button;