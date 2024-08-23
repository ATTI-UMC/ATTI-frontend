import React, { useState } from "react";
import styled from "styled-components";
import { fetchLogin } from "../../api/fetch";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler = async (event) => {
    const userId = await fetchLogin(id, password);
    event.preventDefault(); // 폼 제출 및 페이지 새로고침 방지
    console.log(userId);
  };

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <FormContainer>
      <Input
        type="email"
        placeholder="E-mail 입력하기"
        onChange={onIdChangeHandler}
        value={id}
      />
      <Input
        type="password"
        placeholder="비밀번호 입력하기"
        onChange={onPasswordChangeHandler}
        value={password}
      />
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <CheckboxLabel>로그인 상태 유지하기</CheckboxLabel>
      </CheckboxContainer>
      <Button onClick={() => onLoginHandler(id, password)}>로그인</Button>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
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
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 15px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.main[500]};
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
