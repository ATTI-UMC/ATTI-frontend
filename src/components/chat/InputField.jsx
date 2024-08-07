import React from "react";
import styled from "styled-components";
import button_image from "../../assets/images/button_image.png"
import button_send from "../../assets/images/button_send.png"

const InputField = ({ inputValue, handleInputChange, handleSend }) => (
  <InputWrapper>
    <ImgBtn><Icon src={ button_image }/></ImgBtn>
    <Input 
      type="text"
      placeholder="메시지를 입력해주세요"
      value={inputValue}
      onChange={handleInputChange}
    />
    <SendBtn onClick={handleSend}><Icon src={ button_send }/></SendBtn>
  </InputWrapper>
)

export default InputField;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 425px;
  height: 54px;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
const Input = styled.input`
  flex:1;
  border: none;
  outline: none;
`

const SendBtn = styled.button`
  width: 56px;
  height: 100%;
  padding: 0;
  border: none;
`
const ImgBtn = styled.button`
  width: 56px;
  height: 100%;
  padding: 0;
  border: none;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`