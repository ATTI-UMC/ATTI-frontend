import styled from "styled-components";
import flip from "../../assets/images/flip.png";
import React, { useState } from "react";

const InfoCard = ({ info }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrapper isflipped={isFlipped.toString()}>
      <CardFront>
        <Container>
          <Image />
          <InfoContainer>
            <MbtiText>{info[0]} 인</MbtiText>
            <Nickname>{info[1]} 님</Nickname>
          </InfoContainer>
        </Container>
        <FlipContainer>
          <Flip src={flip} onClick={handleClick} />
        </FlipContainer>
      </CardFront>
      <CardBack>
        <Container>
          <Image />
          <InfoContainer>
            <BackInfoWrapper>
              <BackInfoTitle>나이</BackInfoTitle>
              <BackInfoText>만 {info[2]}세</BackInfoText>
            </BackInfoWrapper>
            <BackInfoWrapper>
              <BackInfoTitle>학력</BackInfoTitle>
              <BackInfoText>{info[3]}</BackInfoText>
            </BackInfoWrapper>
            <BackInfoWrapper>
              <BackInfoTitle>학번</BackInfoTitle>
              <BackInfoText>{info[4]}</BackInfoText>
            </BackInfoWrapper>
            <BackInfoWrapper>
              <BackInfoTitle>상태</BackInfoTitle>
              <BackInfoText>{info[5]}</BackInfoText>
            </BackInfoWrapper>
          </InfoContainer>
        </Container>
        <FlipContainer>
          <Flip src={flip} onClick={handleClick} />
        </FlipContainer>
      </CardBack>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.div`
  display: grid;
  perspective: 800px;
  transition: transform 0.3s;
  transform: perspective(800px)
    ${({ isflipped }) =>
      isflipped === "true" ? "rotateY(180deg)" : "rotateY(0)"};
  transform-style: preserve-3d;
`;

const CardFace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(15, 189, 136, 1);
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  gap: 5px;
  margin-bottom: 10px;
  backface-visibility: hidden;
  grid-area: 1/1/1/1;
`;

const CardFront = styled(CardFace)``;

const CardBack = styled(CardFace)`
  background-color: rgba(15, 189, 136, 1);
  color: white;
  transform: rotateY(180deg);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const Image = styled.img`
  background-color: rgba(217, 217, 217, 1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const BackInfoTitle = styled.div`
  font-weight: 500;
`;

const BackInfoText = styled.div`
  font-weight: 400;
`;

const BackInfoWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 12px;
  gap: 10px;
`;

const MbtiText = styled.div`
  font-size: 14px;
`;

const Nickname = styled.div`
  font-size: 18px;
`;

const FlipContainer = styled.div`
  text-align: center;
`;

const Flip = styled.img`
  cursor: pointer;
`;
