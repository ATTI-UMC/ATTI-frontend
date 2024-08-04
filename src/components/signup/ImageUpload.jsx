// ImageUpload.js
import React, { useRef, useState } from "react";
import styled from "styled-components";
import camera from "../../assets/images/camera.png";

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleBoxClick = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });
  };

  const handleTakePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    const video = videoRef.current;
    const width = 250; 
    const height = 150; 

    // Get the white box position and size
    const whiteBox = document.getElementById("white-box");
    const whiteBoxRect = whiteBox.getBoundingClientRect();
    const videoRect = video.getBoundingClientRect();

    const offsetX = whiteBoxRect.left - videoRect.left;
    const offsetY = whiteBoxRect.top - videoRect.top;

    // Draw the video frame onto the canvas
    context.drawImage(video, offsetX, offsetY, width, height, 0, 0, width, height);

    const imageDataUrl = canvasRef.current.toDataURL("image/png");
    setImagePreview(imageDataUrl);

    // Stop all video tracks to close the camera
    video.srcObject.getTracks().forEach((track) => track.stop());
    setIsCameraOpen(false);
  };

  return (
    <ImageUploadWrapper>
      <Label>학생증 인증</Label>
      <ImageUploadBox onClick={handleBoxClick}>
        {imagePreview ? (
          <ImagePreviewWrapper>
            <ImagePreview src={imagePreview} alt="Uploaded Image" />
          </ImagePreviewWrapper>
        ) : (
          <ImageIcon src={camera} alt="Camera Icon" />
        )}
      </ImageUploadBox>
      {isCameraOpen && (
        <CameraOverlay>
          <Video ref={videoRef} />
          <WhiteBox id="white-box" />
          <Canvas ref={canvasRef} width="250" height="150" style={{ display: "none" }} />
          <TakePhotoButton onClick={handleTakePhoto}>사진 촬영</TakePhotoButton>
        </CameraOverlay>
      )}
    </ImageUploadWrapper>
  );
};

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
  height: 150px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
`;

const ImageIcon = styled.img`
  width: 58px;
  height: 50px;
`;

const ImagePreviewWrapper = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImagePreview = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CameraOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 640px;
  height: 480px;
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 250px;
  height: 150px;
  border: 2px solid white;
  top: calc(50% - 100px);  
  left: calc(50% - 125px);  
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
`;

const Canvas = styled.canvas`
  display: none;
`;

const TakePhotoButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
