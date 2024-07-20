import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: calc(100% - 40px);
  margin-top: 20px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display:block;
  margin-bottom: 15px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
`
const VerifyButton = styled.button`
  width: 50px;
  border: none;
  background-color: #fff
  cursor: pointer;
`;

const InputField = ({ label, type, placeholder, withButton }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputContainer>
      <Input type={type} placeholder={placeholder} />
      {withButton && <VerifyButton>인증</VerifyButton>}
    </InputContainer>
  </InputWrapper>
)

export default InputField;
