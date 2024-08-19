import styled from "styled-components";
import React, { useState } from "react";

const SettingField = ({ title, description, limit }) => {
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Input onChange={onInputHandler} placeholder={description}></Input>
      <InputCount>
        <Count>
          {inputCount}/{limit}자
        </Count>
      </InputCount>
    </Container>
  );
};

export default SettingField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #0fbd88;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;

const InputCount = styled.p``;

const Count = styled.span``;
