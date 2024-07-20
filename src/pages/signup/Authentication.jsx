import React from "react";
import InputField from "../../components/signupComponents/InputField";
import Button from "../../components/signupComponents/Button";
import ImageUpload from "../../components/signupComponents/ImageUpload";

const Authentication = () => {
  return (
    <>
      <InputField label="E - mail 입력하기" type="text" withButton />
      <InputField label="인증번호" type="text" />
      <ImageUpload />
      <Button />
    </>
  );
};

export default Authentication;
