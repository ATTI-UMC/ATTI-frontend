import React from "react";
import styled from "styled-components";

const Modal = ({ isVisible, onClose, title, message, onConfirm }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onClose} />
      <ModalContainer isVisible={isVisible}>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ButtonWrapper>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm} >신고</ConfirmButton>
        </ButtonWrapper>
      </ModalContainer>
    </>
  )
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none') };
  z-index: 1000;
`
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 270px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 1001;
  text-align: center;
`;

const ModalTitle = styled.h2`
  color: #D91040;
`;

const ModalMessage = styled.p`
  margin: 25px 0;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  color: #5a5a5a;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  width: 106px;
  height: 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #D91040;
  width: 106px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
