import React, { useRef } from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, error }) => {
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
            <ModalHeader>!</ModalHeader>
            <Content>
              <Message>
                <Error>{error}</Error>하였습니다
              </Message>
              <Message>다시 확인해 주세요.</Message>
            </Content>
            <CloseButton onClick={onClose}>확인</CloseButton>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

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
  background: white;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  height: 35%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ModalHeader = styled.div`
  display: flex;
  color: #d91040;
  background-color: rgba(178, 147, 154, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const Error = styled.span`
  color: red;
`;

const Message = styled.p``;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.main[500]};
  color: white;
  padding: 0.6rem 2.5rem;
  margin: 0 auto;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 15px;
`;
