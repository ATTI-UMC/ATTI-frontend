import styled from "styled-components";
import React, { useEffect, useState } from "react";

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
      <Input />
      <Text>{imageText}</Text>
    </Container>
  );
};

export default ImageInputField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const Text = styled.div``;
