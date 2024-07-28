import React, { useState } from "react";
import InputField from "../../components/signup/InputField";
import Button from "../../components/signup/Button";
import ImageUpload from "../../components/signup/ImageUpload";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  return (
    <>
      <InputField 
        label="E - mail 입력하기" 
        type="text" 
        value={email}
        onChange={handleEmailChange}
        disabled={!isEmailValid}
        withButton />
      <InputField label="인증번호" type="text" />
      <ImageUpload />
      <Button />
    </>
  );
};

export default Authentication;
