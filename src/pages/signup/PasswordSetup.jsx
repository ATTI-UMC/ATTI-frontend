import React from "react";
import InputField from "../../components/signup/InputField";
import Button from "../../components/signup/Button";

const PasswordSetup = () => {
  return (
    <>
      <InputField label= "비밀번호 설정하기" type="text" placeholder="10~20자 (숫자, 영어 포함)" />
      <InputField label="비밀번호 재입력" type="text" placeholder="10~20자 (숫자, 영어 포함)"/>
      <Button />
    </>
  );
};

export default PasswordSetup;
