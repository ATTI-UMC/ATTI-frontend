import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`

const Label = styled.label`
  display:block;
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
`

const InputField = ({ label, type }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <Input type={type} />  
  </InputWrapper>
)

export default InputField;
