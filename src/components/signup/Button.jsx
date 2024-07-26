import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width: calc(100% - 40px);
  max-width: 400px;
  height: 60px;
  padding: 15px;
  margin-top: auto;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.main[500]};
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Button = () => {
  return(
    <Btn>다음</Btn>
  )
}

export default Button;