import styled, { withTheme } from "styled-components";
import letter_white from "../../assets/images/letter_white.png";
import letter_green from "../../assets/images/letter_green.png";
import character from "../../assets/images/INTJ.png";
import { useEffect, useState } from "react";

const NotificatioinContainer = ({ isodd, object }) => {
  return (
    <Container key={object.notification_id} $isodd={isodd}>
      <IconWrapper>
        <LetterIcon src={isodd ? letter_white : letter_green}></LetterIcon>
        <Character src={character}></Character>
      </IconWrapper>
      <InfoWrapper>
        <Info $isodd={isodd}>
          <Nickname>{object.title}</Nickname>
          <Mbti $isodd={isodd}>INFP</Mbti>
        </Info>
        <LastMessage $isodd={isodd}>{object.last_message}</LastMessage>
      </InfoWrapper>
    </Container>
  );
};

export default NotificatioinContainer;

const Container = styled.div`
  display: flex;
  border: 1px solid #10d99b;
  border-radius: 10px;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => (props.$isodd ? "#10d99b" : "white")};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const LetterIcon = styled.img`
  width: 39px;
  height: 30px;
`;

const Character = styled.img`
  width: 84px;
  height: 94px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Info = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => (props.$isodd ? "white" : "#10d99b")};
  gap: 10px;
  padding-bottom: 5px;
  margin: 10px;
`;

const Nickname = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Mbti = styled(Nickname)`
  color: ${(props) => (props.$isodd ? "white" : "#10d99b")};
`;

const LastMessage = styled.div`
  margin: 0 10px 10px 10px;
  color: ${(props) => (props.$isodd ? "white" : "#10d99b")};
`;
