import React from 'react'
import styled from 'styled-components'

const InputField = ({ label, type, placeholder, withButton, value, onChange, error, success, disabled }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputContainer>
      <Input 
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {withButton && <VerifyButton disabled={disabled} >인증</VerifyButton>}
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
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color:  ${({ theme, disabled }) => disabled ? '#ccc' : theme.colors.main[500]};
  color: #fff;
  right: 10px;
  top: 2px;
  cursor: ${({disabled}) => disabled ? 'none' : 'pointer' }
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