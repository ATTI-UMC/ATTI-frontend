import React, { useState } from "react";
import InputField from "../../components/signup/InputField";
import Button from "../../components/signup/Button";
import ImageUpload from "../../components/signup/ImageUpload";
import axios from "axios";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const baseURL = "http://52.78.150.51:3000";

const Authentication = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");

  const [verificationNum, setVerificationNum] = useState("");
  const [isVerificationNumValid, setIsVerificationNumValid] = useState(false);

  const [verificationError, setVerificationError] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState("");

  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUploadSuccess = () => {
    setIsImageUploaded(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  // 인증번호 전송 버튼 클릭 로직
  const handleSendButtonClick = async () => {
    try {
      const response = await axios.post(`${baseURL}/join/sendemail`, {
        email: email,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerificationNumChange = (e) => {
    const codeValue = e.target.value;
    setVerificationNum(codeValue);
    setIsVerificationNumValid(codeValue.length === 6);
    setVerificationError("");
    setVerificationSuccess("");
  };

  //인증번호 확인 버튼 클릭 로직
  const handleCheckButtonClick = async () => {
    try {
      const response = await axios.post(`${baseURL}/join/verify`, {
        email: email,
        code: verificationNum,
      });
      if (response.data.verified) {
        setVerificationSuccess("인증되었습니다");
      } else {
        setVerificationError("인증번호가 일치하지 않습니다");
      }
    } catch (error) {
      console.error("이메일 인증 요청 실패:", error);
      setVerificationError("인증번호 확인에 실패했습니다. 다시 시도해 주세요");
    }
  };

  const handleNextButtonClick = () => {
    navigate("/signup/password-setup", { state: { email: email } });
  };

  const isNext = isVerificationNumValid;

  return (
    <>
      <InputField
        label="E - mail 입력하기"
        type="email"
        value={email}
        onChange={handleEmailChange}
        buttonOnClick={handleSendButtonClick}
        disabled={!isEmailValid}
        withSendButton
      />
      <InputField
        label="인증번호"
        type="text"
        value={verificationNum}
        onChange={handleVerificationNumChange}
        disabled={!isVerificationNumValid}
        withCheckButton
        buttonOnClick={handleCheckButtonClick}
        success={verificationSuccess}
        error={verificationError}
      />
      <ImageUpload onUploadSuccess={handleImageUploadSuccess} />
      <Button disabled={!isNext} onClick={handleNextButtonClick} />
      <button onClick={handleClick}>모달확인용</button>
      <Modal
        show={showModal}
        onClose={handleClick}
        error={"학생증 인증에 실패"}
      />
    </>
  );
};

export default Authentication;
