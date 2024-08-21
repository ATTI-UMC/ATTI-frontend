import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import default_picture from "../../../assets/images/default_picture.png";

const ImageInputField = () => {
  /*
// 폼 제출 핸들러
const handleSubmit = (e) => {
  e.preventDefault();
  if (image) {
    const formData = new FormData();
    formData.append("image", image);

    // 서버에 폼 데이터를 POST 요청으로 전송 (예: Axios 사용)
    fetch("https://example.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};*/

  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [imageText, setImageText] = useState(
    "아띠토크의 메인 사진을 설정해주세요!"
  );

  useEffect(() => {
    if (image !== null) {
      setImageText("메인 사진이 설정되었어요!");
    }
  }, [image]);

  const handleUpload = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <InputBox
        onClick={handleUpload}
        $isImageExist={preview ? "true" : "false"}
      >
        <Input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
        />
        {preview ? (
          <Image src={preview} />
        ) : (
          <DefaultImage src={default_picture} />
        )}
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
  display: flex;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isImageExist === "true" ? "white" : "#d9d9d9"};
  margin-bottom: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const DefaultImage = styled.img`
  width: 40%;
  height: 40%;
`;

const Text = styled.div`
  font-size: 14px;
  color: #1c1b1f;
  margin-bottom: 10px;
`;
