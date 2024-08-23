import styled from "styled-components";
import React, { useRef } from "react";
import Recommend from "../main/Recommend";

const Preview = ({ objectList, show, onClose }) => {
  const modalRef = useRef();

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  return (
    <>
      {show && (
        <Overlay onClick={handleOverlayClick}>
          <ModalContainer ref={modalRef}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <Wrapper>
              <ImageWrapper>
                <Image />
              </ImageWrapper>
              <TextWrapper>
                <Title>{objectList.title}</Title>
                <Description>{objectList.description}</Description>
                <HashTagContainer>
                  {objectList.tagList.map((elm, idx) => (
                    <HashTag key={idx}># {elm}</HashTag>
                  ))}
                </HashTagContainer>
              </TextWrapper>
            </Wrapper>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Preview;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  max-width: 400px; //임시
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #b8e581;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  gap: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
  margin-bottom: 10px;
`;

const Image = styled.img``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  border-bottom: 1px solid white;
  padding: 5px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  color: white;
  margin-bottom: 10px;
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HashTag = styled.div`
  font-size: 10px;
  font-weight: 300;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
