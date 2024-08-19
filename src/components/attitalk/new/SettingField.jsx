import styled from "styled-components";
import React from "react";
import HashtagInput from "./HashtagInput";

const SettingField = ({
  title,
  description,
  limit,
  isHashtag,
  value,
  onChange,
  length,
}) => {
  const onInputHandler = (inputValue) => {
    onChange(inputValue);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {isHashtag ? (
        <HashtagInput
          onChange={onInputHandler}
          placeholder={description}
          limit={limit}
        />
      ) : (
        <Input
          value={value}
          onChange={(e) => onInputHandler(e.target.value)}
          placeholder={description}
        />
      )}
      <InputCount>
        <Count>
          {isHashtag ? `${length}/${limit}` : `${value.length}/${limit}`}
        </Count>
      </InputCount>
    </Container>
  );
};

export default SettingField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #0fbd88;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 8px 4px;
  font-size: 12px;
  outline: none;
`;

const InputCount = styled.p`
  font-size: 12px;
  color: gray;
  text-align: right;
  margin-top: 4px;
`;

const Count = styled.span``;
