// ImageUpload.js
import React from "react";
import styled from "styled-components";
import camera from "../../assets/images/camera.png";

const ImageUpload = () => (
  <ImageUploadWrapper>
    <Label>학생증 인증</Label>
    <ImageUploadBox>
      <ImageIcon src={camera} />
    </ImageUploadBox>
  </ImageUploadWrapper>
);

export default ImageUpload;

const ImageUploadWrapper = styled.div`
  width: calc(100% - 40px);
  margin-top: 20px;
`;

const ImageUploadBox = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 123px;
  box-sizing: border-box;
`;

const ImageIcon = styled.img`
  width: 58px;
  height: 50px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;
