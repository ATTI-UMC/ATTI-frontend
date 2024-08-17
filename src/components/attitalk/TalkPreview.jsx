import styled from "styled-components";

const TalkPreview = () => {
  return (
    <Container>
      <ChatContainer>
        <Image />
        <InfoWrapper>
          <Nickname>닉네임</Nickname>
          <Mbti>mbti</Mbti>
        </InfoWrapper>
        <ChatWrapper>
          <ChatTitle></ChatTitle>
          <Preview></Preview>
        </ChatWrapper>
      </ChatContainer>
      <Date />
    </Container>
  );
};

export default TalkPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  display: flex;
`;

const Image = styled.img``;

const InfoWrapper = styled.div``;

const Nickname = styled.div``;

const Mbti = styled.div``;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatTitle = styled.div``;

const Preview = styled.div``;
const Date = styled.div``;
