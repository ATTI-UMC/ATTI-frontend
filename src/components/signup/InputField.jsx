import React from 'react'
import styled from 'styled-components'

const InputField = ({ label, type, placeholder, withSendButton, withCheckButton, value, onChange, error, success, disabled,  buttonOnClick }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputContainer>
      <Input 
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {withSendButton && <VerifyButton disabled={disabled} onClick={buttonOnClick} >인증</VerifyButton>}
      {withCheckButton && <VerifyButton onClick={buttonOnClick}>확인</VerifyButton>}
    </InputContainer>
    {error && <ErrorMsg>{error}</ErrorMsg>}
    {success && <SuccessMsg>{success}</SuccessMsg>}
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
  padding: 10px 0;
  border: none;
  outline: none;
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
  color: #D91040;
  font-size: 13px;
`
const SuccessMsg = styled.p`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 13px;
`