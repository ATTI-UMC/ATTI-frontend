import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { images } from "../../utils/mbti-characters";
import HeaderMain from "../../components/HeaderMain";
import Explain from "../../components/chat/Explain";

const Chat1on1 = () => {
  const navigate = useNavigate();

  const mbtiTypes = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ];

  const handleMBTIOptionClick = (mbti) => {
    navigate("/chatroom");
  };

  return (
    <>
      <HeaderMain />
      <ContentWrapper>
        <Explain
          title="MBTI 아띠님!"
          message="친구가 되고싶은 MBTI를 선택해주세요!"
        />
        <MBTIContainer>
          {mbtiTypes.map((mbti) => (
            <MBTIOption key={mbti} onClick={() => handleMBTIOptionClick(mbti)}>
              <MbtiCharacter src={images[mbti]} />
              {mbti}
            </MBTIOption>
          ))}
        </MBTIContainer>
      </ContentWrapper>
    </>
  );
};

export default Chat1on1;

const MBTIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, auto);
  place-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const MBTIOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 195px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: #b8e581;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const MbtiCharacter = styled.img`
  width: 140px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 7.5px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 60px;
`;
