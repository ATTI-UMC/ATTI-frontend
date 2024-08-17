import React, { useState } from "react";
import InputField from "../../components/signup/InputField";
import Button from "../../components/signup/Button";

const PasswordSetup = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState("");

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,20}$/;

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!passwordRegex.test(newPassword)) {
      setPasswordError("형식에 맞는 비밀번호를 입력해주세요");
      setPasswordSuccess("");
    } else {
      setPasswordError("");
      setPasswordSuccess("사용 가능한 비밀번호입니다");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("불일치");
      setConfirmPasswordSuccess("");
    } else {
      setConfirmPasswordError("");
      setConfirmPasswordSuccess("일치");
    }
  };

  return (
    <>
      <InputField
        label="비밀번호 설정하기"
        type="text"
        placeholder="10~20자 (숫자, 영어 포함)"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        success={passwordSuccess}
      />
      <InputField
        label="비밀번호 재입력"
        type="password"
        placeholder="10~20자 (숫자, 영어 포함)"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={confirmPasswordError}
        success={confirmPasswordSuccess}
      />
      <Button
        disabled={!confirmPasswordSuccess}
        to={"/onboarding/personal-info"}
      />
    </>
  );
};

export default PasswordSetup;
