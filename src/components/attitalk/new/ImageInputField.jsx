import styled from "styled-components";
import React, { useEffect, useState } from "react";
import default_picture from "../../../assets/images/default_picture.png";

const ImageInputField = () => {
  const [isImageExist, setIsImageExist] = useState(false);
  const [imageText, setImageText] = useState(
    "아띠토크의 메인 사진을 설정해주세요!"
  );

  useEffect(() => {
    setImageText("메인 사진이 설정되었어요!");
  }, [isImageExist]);

  return (
    <Container>
      <InputBox>
        <Input src={default_picture} />
      </InputBox>
      <Text>{imageText}</Text>
    </Container>
  );
};

export default ImageInputField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const InputBox = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: none;
  width: 180px;
  height: 180px;
  border: none;
`;

const Text = styled.div`
  font-size: 14px;
  color: #1c1b1f;
  margin-bottom: 10px;
`;
