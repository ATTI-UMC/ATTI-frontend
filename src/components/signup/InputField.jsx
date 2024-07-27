import React from 'react'
import styled from 'styled-components'

const InputField = ({ label, type, placeholder, withButton, value, onChange, error, success }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputContainer>
      <Input 
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {withButton && <VerifyButton>인증</VerifyButton>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {success && <SuccessMsg>{success}</SuccessMsg>}
    </InputContainer>
  </InputWrapper>
)

export default InputField;

const InputWrapper = styled.div`
  width: calc(100% - 40px);
  margin-top: 20px;
`

const InputContainer = styled.div`
  display: flex;
  position: relative;
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
  position: absolute;
  width: 50px;
  border: none;
  background-color: white;
  right: 0;
  top: 10px;
  cursor: pointer;
`
const ErrorMsg = styled.p`
  position: absolute;
  right: 5px;
  top: 11px;
  color: #D91040;
  font-size: 13px;
`
const SuccessMsg = styled.p`
position: absolute;
right: 5px;
top: 11px;
color: ${({ theme }) => theme.colors.main[500]};
font-size: 13px;
`