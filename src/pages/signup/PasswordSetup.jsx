import React, { useState } from "react";
import InputField from "../../components/signup/InputField";
import Button from "../../components/signup/Button";

const PasswordSetup = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState('');

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,20}$/;

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!passwordRegex.test(newPassword)) {
      setPasswordError('실패하였습니다');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError('불일치');
      setConfirmPasswordSuccess('');
    } else {
      setConfirmPasswordError('');
      setConfirmPasswordSuccess('일치');
    }
  };

  return (
    <>
      <InputField 
        label= "비밀번호 설정하기"
        type="text"
        placeholder="10~20자 (숫자, 영어 포함)"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
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
      <Button />
    </>
  );
};

export default PasswordSetup;
