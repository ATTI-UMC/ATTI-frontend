import React from 'react'
import styled from 'styled-components'
import InputField from '../components/InputField';
import Button from '../components/Button';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  background: #fff;
`

const SignUp = () => {
  return (
    <SignUpContainer>
      <InputField label="E-mail 입력하기" type="email" />
      <InputField label="인증번호" type="text" />
    </SignUpContainer>
  )
};

export default SignUp;
