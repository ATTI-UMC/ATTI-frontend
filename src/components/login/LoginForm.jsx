import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 90%;
  height: 42px;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 14px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px
`;

const Button = styled.button`
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

const LoginForm = () => (
  <FormContainer>
    <Input type="email" placeholder="E-mail 입력하기" />
    <Input type="password" placeholder="비밀번호 입력하기" />
    <CheckboxContainer>
      <Checkbox type="checkbox" />
      <CheckboxLabel >로그인 상태 유지하기</CheckboxLabel>
    </CheckboxContainer>
    <Button>로그인</Button>
  </FormContainer>
);

export default LoginForm;
