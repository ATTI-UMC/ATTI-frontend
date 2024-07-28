import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const PersonalInfoForm = () => {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [gender, setGender] = useState(null);
  const [nickName, setNickName] = useState("");
  const [isBirthValid, setIsBirthValid] = useState(true);
  const [isNickNameValid, setisNickNameValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  //-> zustand 사용해서 next button에 전달하여 버튼 활성화 예정

  // 닉네임(공백,특수문자) 유효성, 성별 not null, 생년월일 유효성 검사
  // 폼 전체에 대한 유효성 검사를 위해 useEffect deps 사용
  useEffect(() => {
    const allInputsFilled = inputs.every((input) => input !== "");
    const isValid =
      isNickNameValid && isBirthValid && gender !== null && allInputsFilled;
    setIsFormValid(isValid);
    console.log(`isalid? : ${isFormValid}`);
  }, [inputs, isNickNameValid, isBirthValid, gender]);

  const handleGenderClick = (buttonName) => {
    setGender((prevGender) => (prevGender === buttonName ? null : buttonName));
  };

  const handleBirthChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value !== "" && index < 5) {
      refs[index + 1].current.focus();
    }

    if (newInputs.every((input) => input !== "")) {
      birthValidation(newInputs);
    }
  };

  const birthValidation = (array) => {
    const birthString = array.join("");
    const year = parseInt(birthString.slice(0, 2));
    const month = parseInt(birthString.slice(2, 4));
    const day = parseInt(birthString.slice(4, 6));

    const currentYear = new Date().getFullYear();
    const century =
      year <= parseInt(currentYear.toString().slice(2, 4)) ? 2000 : 1900;
    const fullYear = century + year;

    const birthDate = new Date(fullYear, month - 1, day);

    const isValidDate =
      birthDate.getFullYear() === fullYear &&
      birthDate.getMonth() === month - 1 &&
      birthDate.getDate() === day;

    setIsBirthValid(isValidDate);
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const isValid = /^[a-zA-Z0-9가-힣]*$/.test(input);
    setNickName(input);
    setisNickNameValid(isValid);
  };

  return (
    <FormContainer>
      <NickNameWrapper>
        <InputTitle>닉네임</InputTitle>
        <Input
          placeholder="공백, 특수 문자 제외"
          onChange={handleNameChange}
        ></Input>
        {!isNickNameValid && (
          <ValidationMessage>
            공백, 특수 문자가 포함되어있습니다
          </ValidationMessage>
        )}
      </NickNameWrapper>
      <GenderWrapper>
        <InputTitle>성별</InputTitle>
        <ButttonWrapper>
          <Button
            onClick={() => handleGenderClick("female")}
            selected={gender === "female"}
          >
            여성
          </Button>
          <Button
            onClick={() => handleGenderClick("male")}
            selected={gender === "male"}
          >
            남성
          </Button>
        </ButttonWrapper>
      </GenderWrapper>
      <BirthWrapper>
        <InputTitle>생년 월일</InputTitle>
        <InputWrapper>
          {inputs.map((value, index) => (
            <BirthInput
              key={index}
              ref={refs[index]}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleBirthChange(index, e.target.value)}
            />
          ))}
        </InputWrapper>
        {!isBirthValid && (
          <ValidationMessage>유효하지 않은 날짜입니다</ValidationMessage>
        )}
      </BirthWrapper>
    </FormContainer>
  );
};

export default PersonalInfoForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const NickNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const ValidationMessage = styled.div`
  margin: 0.5rem;
  color: red;
  font-size: 0.8rem;
`;

const InputTitle = styled.div`
  font-weight: 500;
  color: #1c1b1f;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #999999;
  outline: none;
  padding: 8px 10px;
`;

const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const ButttonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 38px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => (props.selected ? `#10D99B` : `#5A5A5A`)};
  border-radius: 15px;
  color: #1c1b1f;
  font-weight: 400;
  width: 140px;
  height: 46px;
  cursor: pointer;
`;

const BirthWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BirthInput = styled.input`
  width: 46px;
  height: 46px;
  margin: 0 5px;
  text-align: center;
  font-size: 1.2rem;
  outline: none;
  border-radius: 15px;
  border: 1px solid #5a5a5a;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: ${({ theme }) => theme.colors.main[500]};
  }
`;
