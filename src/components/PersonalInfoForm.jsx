import React, { useState, useRef } from "react";
import styled from "styled-components";

const PersonalInfoForm = () => {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [gender, setGender] = useState(null);

  const handleGenderClick = (buttonName) => {
    setGender(buttonName === gender ? null : buttonName);
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value !== "" && index < 5) {
      refs[index + 1].current.focus();
    }
  };

  return (
    <FormContainer>
      <NickNameWrapper>
        <InputTitle>닉네임</InputTitle>
        <Input placeholder="공백, 특수 문자 제외"></Input>
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
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </InputWrapper>
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
