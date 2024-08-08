import React from "react";
import styled from "styled-components";

const BottomSheet = ({ isVisible, onClose, children }) => (
  <>
    <Overlay isVisible={isVisible} onClick={onClose} />
    <Sheet isVisible={isVisible}>
      {children}
    </Sheet>
  </>
  
);

export default BottomSheet;

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

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  //슬라이드 애니메이션
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  z-index: 1001;
`